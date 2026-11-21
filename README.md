# Biblioteca

App de lectura: catálogo de clásicos de dominio público, lector con efecto de
paso de página en 3D, progreso guardado por usuario y notas de lectura.

**Stack:** React + Vite + TailwindCSS · Node + Express · PostgreSQL con Prisma

---

## Arrancar el proyecto

Hacen falta **dos terminales**: una para el backend y otra para el frontend.
Node 20 o superior, y PostgreSQL corriendo en local.

### 1. Base de datos

Crea una base vacía llamada `biblioteca` (en pgAdmin o con `createdb biblioteca`).

### 2. Backend

```bash
cd server
cp .env.example .env     # y rellena DATABASE_URL y JWT_SECRET
npm install              # genera el cliente de Prisma automáticamente
npx prisma migrate deploy
npm run seed             # mete dos libros de prueba
npm run catalogo         # baja el catálogo de Gutenberg (una vez, ~2 min)
npm run dev              # queda escuchando en :4000
```

Para generar el `JWT_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

### 3. Frontend

En la **otra** terminal:

```bash
cd client
npm install
npm run dev              # abre en :5173
```

---

## Si algo falla

| Síntoma | Causa y arreglo |
|---|---|
| `Cannot find module '.../src/generated/prisma/index.js'` | El cliente de Prisma no está generado. `cd server && npx prisma generate` |
| `P1000 Authentication failed` | `DATABASE_URL` mal en `.env`. Revisa usuario, clave y que diga `@localhost` |
| `ECONNREFUSED` al llamar la API | El backend no está corriendo. Terminal 1, `npm run dev` |
| `No autenticado` en todo | La cookie de sesión venció (dura 2 h). Vuelve a entrar |
| `Cuenta bloqueada temporalmente` | 5 intentos fallidos. Espera 15 min, o pon `bloqueadoHasta` en `NULL` en Prisma Studio |
| `El catálogo todavía no está descargado` | `cd server && npm run catalogo` |

Ver la base de datos por dentro: `cd server && npx prisma studio`

---

## Estructura

```
client/                  frontend React
  src/componentes/       piezas reutilizables (Portada, Campo, Encabezado…)
  src/paginas/           una por ruta (Login, Catalogo, Lector…)
  src/api.js             único punto de contacto con el backend
  src/auth.jsx           sesión del usuario
  src/index.css          sistema de tokens de diseño

server/                  backend Express
  prisma/schema.prisma   modelo de datos
  prisma/migrations/     historial versionado de la base
  src/controllers/       lógica de cada endpoint
  src/middlewares/       autenticación, auditoría, errores
  src/routes/            rutas de la API
  src/schemas/           validación con Zod
  src/services/          catálogo local, descarga de textos y portadas
```

---

## Seguridad

- Contraseñas hasheadas con **Argon2id** (nunca se guardan en claro)
- Sesión en **cookie httpOnly** con `sameSite: strict`, 2 h de vida
- **Bloqueo de cuenta** a los 5 intentos fallidos, 15 minutos
- **Rate limit** por IP: 300 req/15 min general, 10 en login
- Toda entrada validada con **Zod** antes de tocar la base
- Consultas parametrizadas por **Prisma** (sin SQL concatenado)
- Tabla **`Auditoria`** con cada intento, su IP y la hora
- Mensajes de error ambiguos en login y registro (no revelan qué correos existen)
- **Lista blanca de dominios** al consumir fuentes externas (anti-SSRF)

> El archivo `.env` **nunca** se sube al repositorio. Si una clave llega a git,
> queda en el historial para siempre.
