/*
  Warnings:

  - You are about to drop the column `description` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Image` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL DEFAULT 'https://source.unsplash.com/random/400x300',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "productId" TEXT,
    CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("createdAt", "id", "productId", "updatedAt", "url") SELECT "createdAt", "id", "productId", "updatedAt", "url" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
