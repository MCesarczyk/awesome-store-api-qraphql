-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductColor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "hex" TEXT NOT NULL,
    "productId" TEXT
);
INSERT INTO "new_ProductColor" ("hex", "id", "name", "productId") SELECT "hex", "id", "name", "productId" FROM "ProductColor";
DROP TABLE "ProductColor";
ALTER TABLE "new_ProductColor" RENAME TO "ProductColor";
CREATE TABLE "new_ProductSize" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "productId" TEXT
);
INSERT INTO "new_ProductSize" ("id", "name", "productId") SELECT "id", "name", "productId" FROM "ProductSize";
DROP TABLE "ProductSize";
ALTER TABLE "new_ProductSize" RENAME TO "ProductSize";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
