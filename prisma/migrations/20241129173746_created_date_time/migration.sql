-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_timeuser" (
    "id" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_timeuser" ("id", "time") SELECT "id", "time" FROM "timeuser";
DROP TABLE "timeuser";
ALTER TABLE "new_timeuser" RENAME TO "timeuser";
CREATE UNIQUE INDEX "timeuser_id_key" ON "timeuser"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
