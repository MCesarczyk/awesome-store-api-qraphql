/*
  Warnings:

  - Added the required column `value` to the `ProductSize` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductSize" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ProductSize" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "ProductSize";
DROP TABLE "ProductSize";
ALTER TABLE "new_ProductSize" RENAME TO "ProductSize";
CREATE UNIQUE INDEX "ProductSize_name_key" ON "ProductSize"("name");
CREATE UNIQUE INDEX "ProductSize_value_key" ON "ProductSize"("value");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
