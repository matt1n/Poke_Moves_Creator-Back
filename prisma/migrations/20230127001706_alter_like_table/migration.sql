/*
  Warnings:

  - Added the required column `trainer_id` to the `likes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "likes" ADD COLUMN     "trainer_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "FK_O418" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
