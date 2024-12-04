-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "xp" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "timeuser" (
    "id" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "timeuser_id_fkey" FOREIGN KEY ("id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "timeuser_id_key" ON "timeuser"("id");
