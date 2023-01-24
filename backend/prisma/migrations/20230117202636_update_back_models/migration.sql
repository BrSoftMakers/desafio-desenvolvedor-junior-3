/*
  Warnings:

  - You are about to drop the column `content` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `posts` table. All the data in the column will be lost.
  - Added the required column `caption` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "content",
DROP COLUMN "published",
ADD COLUMN     "caption" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
