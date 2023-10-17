/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductColor` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `ProductSize` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_ProductToProductColor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductToProductColor_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToProductColor_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductColor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProductToProductSize" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductToProductSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToProductSize_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductSize" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductColor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ProductColor" ("createdAt", "id", "name", "updatedAt", "value") SELECT "createdAt", "id", "name", "updatedAt", "value" FROM "ProductColor";
DROP TABLE "ProductColor";
ALTER TABLE "new_ProductColor" RENAME TO "ProductColor";
CREATE TABLE "new_ProductSize" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ProductSize" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "ProductSize";
DROP TABLE "ProductSize";
ALTER TABLE "new_ProductSize" RENAME TO "ProductSize";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductColor_AB_unique" ON "_ProductToProductColor"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductColor_B_index" ON "_ProductToProductColor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToProductSize_AB_unique" ON "_ProductToProductSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToProductSize_B_index" ON "_ProductToProductSize"("B");
