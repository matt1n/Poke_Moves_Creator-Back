import { notFoundError } from "../../errors/not-found-error.js";
import { unauthorized } from "../../errors/unauthorized.js";
import { createComment, deleteCommentById, findAllMoveComments, findCommentById, updateCommentById } from "../../repositories/comments.repositories.js";
import { selectMovesById } from "../../repositories/moves.repositories.js";

export async function addComment(message: string, move_id: number, trainer_id: number){
    const move = await selectMovesById(move_id);
    if (!move){
        throw notFoundError()
    }
    await createComment(message,trainer_id,move_id)
}

export async function findMoveComments(move_id: number){
    const moves = await selectMovesById(move_id);
    if (!moves){
        throw notFoundError()
    }
    return await findAllMoveComments(move_id);
}

export async function updateMoveComment(id: number, message: string, trainer_id: number) {
    const comment = await findCommentById(id)
    if(!comment){
        throw notFoundError()
    }
    if (comment.trainer_id !== trainer_id){
        throw unauthorized()
    }
    await updateCommentById(id, message)
}

export async function deleteMoveComment(id: number, trainer_id: number) {
    const comment = await findCommentById(id)
    if(!comment){
        throw notFoundError()
    }
    if (comment.trainer_id !== trainer_id){
        throw unauthorized()
    }
    await deleteCommentById(id)
}