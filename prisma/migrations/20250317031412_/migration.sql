-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "Username" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");
