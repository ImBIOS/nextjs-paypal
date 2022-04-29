-- CreateTable
CREATE TABLE "Payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderID" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
