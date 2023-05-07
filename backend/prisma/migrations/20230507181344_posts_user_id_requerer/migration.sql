/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `TB_POSTS` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `TB_POSTS` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TB_POSTS" DROP CONSTRAINT "TB_POSTS_userId_fkey";

-- AlterTable
ALTER TABLE "TB_POSTS" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TB_POSTS_title_key" ON "TB_POSTS"("title");

-- AddForeignKey
ALTER TABLE "TB_POSTS" ADD CONSTRAINT "TB_POSTS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TB_USERS"("id") ON DELETE CASCADE ON UPDATE CASCADE;
