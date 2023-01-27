import prisma from "../db/db.js";

export async function createLike(id: number, userId:number){
    await prisma.likes.create({data: {move_id: id, trainer_id: userId}})
} 

export async function selectLike(id:number, userId:number){
    return await prisma.likes.findFirst({where: {move_id: id, trainer_id: userId}})
}

export async function deleteLikeById(id:number){
    await prisma.likes.delete({where: {id}})
}