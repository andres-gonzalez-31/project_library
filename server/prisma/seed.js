import 'dotenv/config';
import { prisma } from '../src/config/prisma.js';

const LIBROS = [
  {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupery',
    descripcion: 'Un piloto varado en el desierto conoce a un pequeno principe de otro planeta',
    paginas: [
      'Cuando yo tenia seis anos vi una lamina magnifica en un libro sobre la selva virgen.',
      'Representaba una serpiente boa que se tragaba a una fiera entera, sin masticarla.',
      'Mostre mi obra maestra a las personas mayores y les pregunte si les daba miedo.',
      'Me respondieron: por que habria de dar miedo un sombrero? Mi dibujo no era un sombrero.',
    ],
  },
  {
    titulo: 'La Metamorfosis',
    autor: 'Franz Kafka',
    descripcion: 'Gregorio Samsa despierta convertido en un insecto monstruoso',
    paginas: [
      'Al despertar Gregorio Samsa una manana, tras un sueno intranquilo, se encontro convertido en un monstruoso insecto.',
      'Estaba echado sobre su espalda dura y se veia un vientre abombado y pardo.',
      'Que me ha ocurrido? penso. No era un sueno.',
    ],
  },
];

async function main() {
  for (const { paginas, ...datos } of LIBROS) {
    const existente = await prisma.libro.findFirst({ where: { titulo: datos.titulo } });
    if (existente) {
      console.log(`- ya existe: ${datos.titulo}`);
      continue;
    }

    const libro = await prisma.libro.create({ data: datos });

    await prisma.pagina.createMany({
      data: paginas.map((contenido, i) => ({
        libroId: libro.id,
        numero: i + 1,
        contenido,
      })),
    });

    console.log(`✅ ${datos.titulo} (${paginas.length} paginas)`);
  }
}

main()
  .catch((e) => { console.error('❌', e.message); process.exit(1); })
  .finally(() => prisma.$disconnect());