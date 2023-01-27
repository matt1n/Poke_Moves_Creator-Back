import { Request, Response } from "express";
import { signInTrainer, signUpTrainer } from "../services/auth-sevices/index.js";

export async function signIn(req: Request, res: Response){
    const {email, password} = req.body as {email: string, password: string}
    try {
        const token = await signInTrainer(email, password)
        res.status(200).send(token)
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(404)
        }
        res.sendStatus(500)
    }
}

export async function signUp(req: Request, res: Response){
    const body = req.body as {name: string, email: string, password: string, image: string}
    try {
        await signUpTrainer(body)
        res.sendStatus(201)
    } catch (error) {
        if (error.name === "conflict"){
            return res.status(409).send(error.message)
        }
        res.sendStatus(500)
    }
}