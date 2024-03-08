/*
  Warnings:

  - Added the required column `user_id` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Location_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Location" ("id", "location") SELECT "id", "location" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
CREATE UNIQUE INDEX "Location_location_key" ON "Location"("location");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
