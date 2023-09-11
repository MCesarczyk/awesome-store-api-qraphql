/*
  Warnings:

  - You are about to drop the `CategoriesOnProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CollectionsOnProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoriesOnProduct";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CollectionsOnProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CollectionToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CollectionToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CollectionToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToProduct_AB_unique" ON "_CollectionToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToProduct_B_index" ON "_CollectionToProduct"("B");
