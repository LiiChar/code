-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL
);
INSERT INTO "new_Location" ("id", "location", "user_id") SELECT "id", "location", "user_id" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
CREATE UNIQUE INDEX "Location_location_key" ON "Location"("location");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
