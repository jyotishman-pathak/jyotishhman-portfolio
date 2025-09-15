-- CreateTable
CREATE TABLE "public"."ContactSubmission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isProcessed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);
