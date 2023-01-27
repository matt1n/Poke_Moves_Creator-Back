import prisma from "../db/db.js";

export async function createComment(message: string, trainer_id: number, move_id: number) {
    return await prisma.comments.create({data: {
        message, trainer_id, move_id
    }})
}

export async function findCommentById(id: number){
    return await prisma.comments.findUnique({where: {id}})
}

export async function findAllMoveComments(move_id: number){
    return await prisma.comments.findMany({where: {move_id}})
}

export async function updateCommentById(id: number, message: string){
    return await prisma.comments.update({where: {id}, data:{message}})
}

export async function deleteCommentById(id: number) {
    return await prisma.comments.delete({where: {id}})
}