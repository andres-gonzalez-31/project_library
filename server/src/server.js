import 'dotenv/config';
import app from './app.js';
import { prisma } from './config/prisma.js';

const PORT = process.env.PORT || 4000;

async function main() {
  await prisma.$connect();
  console.log('✅ Base de datos conectada');

  app.listen(PORT, () => {
    console.log(`✅ Servidor en http://localhost:${PORT}`);
  });
}

main().catch(async (e) => {
  console.error('❌ No se pudo iniciar:', e.message);
  await prisma.$disconnect();
  process.exit(1);
});