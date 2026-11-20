# Contexto del proyecto para Claude

App de biblioteca con lector de libros en 3D. La dueña del proyecto es Chelsy;
trabaja en Windows con VS Code y **GitHub Desktop** (hace pull y push con botones,
no por terminal). Habla español colombiano e informal.

## Cómo responderle

- Instrucciones directas, paso a paso, con entregables limpios.
- Un comando a la vez. Pegar varios juntos en la terminal de Windows los encadena y falla.
- Explicaciones conceptuales breves antes que muros de código por archivo.
- Cuando se entreguen varios cambios sobre un mismo archivo, dar el archivo completo
  en vez de fragmentos sueltos: los fragmentos han causado variables sin declarar.
- En cada consulta SQL, decir siempre a qué base de datos va.

## Arquitectura

Monorepo, dos carpetas: `client/` (React + Vite + Tailwind) y `server/`
(Express + Prisma + PostgreSQL). Rama única `main`.

`client/src/api.js` es el **único** punto de contacto con el backend. Cualquier
llamada nueva se agrega ahí, no suelta en los componentes.

## Reglas que no se rompen

1. **El `.env` no se sube.** Nunca. Ni tapado, ni de ejemplo con valores reales.
   El repositorio es público.
2. **`server/src/generated/` no se versiona.** Se regenera con `npx prisma generate`,
   que corre solo en el `postinstall`.
3. **El `usuarioId` sale siempre del token**, nunca del cuerpo de la petición.
   Tomarlo del body abre un IDOR.
4. **Las fuentes externas pasan por lista blanca de dominios** en
   `server/src/services/gutendex.js`. Nunca un `fetch` a una URL que venga del usuario.
5. **Mensajes de error ambiguos en auth.** "Credenciales inválidas" tanto si el
   correo no existe como si la clave está mala.
6. **Solo dominio público.** Gutenberg y Open Library. Nada con derechos vigentes.
7. **Open Library limita a 100 consultas por IP cada 5 minutos.** Las portadas se
   resuelven y validan **al importar**, jamás al pintar la grilla.

## Sistema visual — "lámpara de noche"

Tokens en `client/src/index.css` bajo `@theme`. La interfaz es gris azulado neutro
a propósito; el único color saturado es el ámbar de acento y las portadas.

| Token | Uso |
|---|---|
| `fondo` `panel` `elevado` | superficies, de más honda a más elevada |
| `borde` `borde-vivo` | separadores |
| `texto` `texto-sec` `texto-ter` | jerarquía de texto |
| `ambar` `ambar-alto` `sobre-ambar` | acento y lo que va encima |
| `alerta` `exito` | semánticos |
| `papel` `tinta` | solo dentro del libro |

Tipografías: **Inter** para la interfaz, **Literata** para el texto de los libros.
Nunca serif en formularios.

Las portadas van por `componentes/Portada.jsx`, con cascada:
imagen real → si falla al cargar → respaldo tipográfico con color derivado del
título (deterministico, para que el mismo libro salga siempre igual).

## Estado

Hecho: auth, catálogo, lector 3D con progreso, importación desde Gutendex,
identidad visual.

Pendiente: pantalla Explorar (buscar e importar con portadas validadas),
Mis lecturas con resumen y observaciones, bloqueo de contraseñas filtradas,
2FA, pruebas automatizadas y despliegue.
