import { conflictError } from "../../errors/conflict.js";
import { notFoundError } from "../../errors/not-found-error.js";
import { createLike, deleteLikeById, selectLike } from "../../repositories/likes.repositories.js";

export async function insertLikeService(id: number, userId: number){
    const like = await selectLike(id, userId)
    if(like){
        throw conflictError()
    }
    await createLike(id, userId)
}

export async function deleteLikeService(id: number, userId: number) {
    const like = await selectLike(id, userId)
    if(!like){
        throw notFoundError()
    }
    await deleteLikeById(like.id)
}