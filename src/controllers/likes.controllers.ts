import { Request, Response } from "express";
import {  deleteLikeService, insertLikeService } from "../services/likes-services/index.js";

export async function postLike(req: Request,res: Response){
    const id = req.params.id
    const userId = res.locals
    try {
        await insertLikeService(Number(id), Number(userId))
        res.sendStatus(200)
    } catch (error) {
        if (error.name === "conflict"){
            return res.sendStatus(409)
        }
        res.sendStatus(500)
    }
}

export async function deleteLike(req: Request,res: Response){
    const id = req.params.id
    const userId = res.locals
    try {
        await deleteLikeService(Number(id), Number(userId))
        res.sendStatus(200)
    } catch (error) {
        if (error.name === "NotFoundError"){
            return res.sendStatus(404)
        }
        res.sendStatus(500)
    }
}