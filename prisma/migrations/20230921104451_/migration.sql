/*
  Warnings:

  - The `category` column on the `Board` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tier` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Challenge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChallengeProgress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dopamine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Essay` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[identifycation]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ChallengeProgress" DROP CONSTRAINT "ChallengeProgress_challengeId_fkey";

-- DropForeignKey
ALTER TABLE "ChallengeProgress" DROP CONSTRAINT "ChallengeProgress_userId_fkey";

-- DropForeignKey
ALTER TABLE "Essay" DROP CONSTRAINT "Essay_challengeId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "category",
ADD COLUMN     "category" INTEGER[] DEFAULT ARRAY[]::INTEGER[];

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "address" TEXT,
ADD COLUMN     "delivery" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "faceToFace" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "sold" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "category" SET DEFAULT '전체',
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "tier",
ADD COLUMN     "identifycation" TEXT;

-- DropTable
DROP TABLE "Challenge";

-- DropTable
DROP TABLE "ChallengeProgress";

-- DropTable
DROP TABLE "Dopamine";

-- DropTable
DROP TABLE "Essay";

-- CreateTable
CREATE TABLE "ViewdProductStore" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ViewdProductStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageSrc" TEXT[],
    "category" TEXT NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_identifycation_key" ON "User"("identifycation");

-- AddForeignKey
ALTER TABLE "ViewdProductStore" ADD CONSTRAINT "ViewdProductStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewdProductStore" ADD CONSTRAINT "ViewdProductStore_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
