import { Request, Response } from "express";
import { addComment, deleteMoveComment, findMoveComments, updateMoveComment } from "../services/comments-services/index.js";

export async function getMoveComments(req: Request,res: Response){
    const move_id = req.params.moveId
    try {
        const comments = await findMoveComments(Number(move_id))
        res.send(comments)
    } catch (error) {
        if (error.name === "NotFoundError"){
            return res.sendStatus(404)
        }
        res.sendStatus(500)
    }
}

export async function postComment(req: Request,res: Response){
    const message = req.body.message as string
    const move_id = req.params.moveId
    const trainer_id = res.locals
    try {
        await addComment(message, Number(move_id), Number(trainer_id))
        res.sendStatus(201)
    } catch (error) {
        if (error.name === "NotFoundError"){
            return res.sendStatus(404)
        }
        res.sendStatus(500)
    }
}

export async function updateComment(req: Request,res: Response){
    const message= req.body.message
    const id = req.params.commentId
    const trainer_id = res.locals
    try {
        await updateMoveComment(Number(id),message,Number(trainer_id))
        res.sendStatus(201)
    } catch (error) {
        if (error.name==="unauthorized"){
            return res.sendStatus(401)
        } 
        if (error.name === "NotFoundError"){
            return res.sendStatus(404)
        }
        res.sendStatus(500)
    }
}

export async function deleteComment(req: Request,res: Response){
    const id = req.params.commentId
    const trainer_id = res.locals
    try {
        await deleteMoveComment(Number(id), Number(trainer_id))
        res.sendStatus(201)
    } catch (error) {
        if (error.name==="unauthorized"){
            return res.sendStatus(401)
        } 
        if (error.name === "NotFoundError"){
            return res.sendStatus(404)
        }
        res.sendStatus(500)
    }
}