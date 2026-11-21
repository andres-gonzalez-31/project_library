-- CreateTable
CREATE TABLE "CatalogoFuente" (
    "gutenbergId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "idioma" TEXT NOT NULL,
    "materias" TEXT,
    "actualizado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CatalogoFuente_pkey" PRIMARY KEY ("gutenbergId")
);

-- CreateIndex
CREATE INDEX "CatalogoFuente_titulo_idx" ON "CatalogoFuente"("titulo");

-- CreateIndex
CREATE INDEX "CatalogoFuente_autor_idx" ON "CatalogoFuente"("autor");

-- CreateIndex
CREATE INDEX "CatalogoFuente_idioma_idx" ON "CatalogoFuente"("idioma");
