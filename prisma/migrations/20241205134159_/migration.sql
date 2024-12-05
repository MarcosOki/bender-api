-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "timeuser" (
    "idUser" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    CONSTRAINT "timeuser_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "timeuser_idUser_key" ON "timeuser"("idUser");
