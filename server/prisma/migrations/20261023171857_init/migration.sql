-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('USUARIO', 'ADMIN');

-- CreateEnum
CREATE TYPE "EstadoLectura" AS ENUM ('LEYENDO', 'TERMINADO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'USUARIO',
    "intentosFallidos" INTEGER NOT NULL DEFAULT 0,
    "bloqueadoHasta" TIMESTAMP(3),
    "ultimoAcceso" TIMESTAMP(3),
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Libro" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "portadaUrl" TEXT,
    "publicado" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagina" (
    "id" TEXT NOT NULL,
    "libroId" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,

    CONSTRAINT "Pagina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progreso" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "libroId" TEXT NOT NULL,
    "paginaActual" INTEGER NOT NULL DEFAULT 1,
    "estado" "EstadoLectura" NOT NULL DEFAULT 'LEYENDO',
    "resumen" TEXT,
    "observaciones" TEXT,
    "iniciadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Progreso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auditoria" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT,
    "accion" TEXT NOT NULL,
    "exito" BOOLEAN NOT NULL,
    "ip" TEXT,
    "userAgent" TEXT,
    "detalle" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "Libro_titulo_idx" ON "Libro"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "Pagina_libroId_numero_key" ON "Pagina"("libroId", "numero");

-- CreateIndex
CREATE UNIQUE INDEX "Progreso_usuarioId_libroId_key" ON "Progreso"("usuarioId", "libroId");

-- CreateIndex
CREATE INDEX "Auditoria_accion_creadoEn_idx" ON "Auditoria"("accion", "creadoEn");

-- AddForeignKey
ALTER TABLE "Pagina" ADD CONSTRAINT "Pagina_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auditoria" ADD CONSTRAINT "Auditoria_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
