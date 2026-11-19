/*
  Warnings:

  - A unique constraint covering the columns `[gutenbergId]` on the table `Libro` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Libro" ADD COLUMN     "gutenbergId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Libro_gutenbergId_key" ON "Libro"("gutenbergId");
