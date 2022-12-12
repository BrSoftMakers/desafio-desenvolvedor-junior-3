/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name,email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_authorId_fkey";

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "authorEmail" TEXT NOT NULL DEFAULT 'Anonymous',
ADD COLUMN     "authorName" TEXT NOT NULL DEFAULT 'Anonymous';

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnPost" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CategoriesOnPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "bio" TEXT,
    "userName" TEXT,
    "userId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_name_key" ON "Category"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnPost_postId_categoryId_key" ON "CategoriesOnPost"("postId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_userEmail_key" ON "Profile"("userId", "userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Users_name_key" ON "Users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_email_key" ON "Users"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_name_email_key" ON "Users"("id", "name", "email");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_authorId_authorEmail_authorName_fkey" FOREIGN KEY ("authorId", "authorEmail", "authorName") REFERENCES "Users"("id", "email", "name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPost" ADD CONSTRAINT "CategoriesOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPost" ADD CONSTRAINT "CategoriesOnPost_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_userEmail_fkey" FOREIGN KEY ("userId", "userEmail") REFERENCES "Users"("id", "email") ON DELETE CASCADE ON UPDATE CASCADE;
