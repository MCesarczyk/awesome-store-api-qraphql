/*
  Warnings:

  - You are about to drop the column `hex` on the `ProductColor` table. All the data in the column will be lost.
  - Added the required column `value` to the `ProductColor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductColor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "productId" TEXT,
    CONSTRAINT "ProductColor_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProductColor" ("id", "name", "productId") SELECT "id", "name", "productId" FROM "ProductColor";
DROP TABLE "ProductColor";
ALTER TABLE "new_ProductColor" RENAME TO "ProductColor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
