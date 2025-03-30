/*
  Warnings:

  - You are about to drop the column `filePath` on the `Post` table. All the data in the column will be lost.
  - Added the required column `filename` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "filePath",
ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
