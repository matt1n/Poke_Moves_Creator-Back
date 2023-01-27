import { QueryResult } from "pg";
import prisma from "../db/db.js";
import jwt from 'jsonwebtoken'

export async function insertTrainer(body: {name: string, email: string, password: string, image: string}){
    await prisma.trainers.create({data: body})
}

export async function findTrainer(email: string){
    return await prisma.trainers.findUnique({where: {email}})
}

export function generateToken(id: number){
    return jwt.sign({id}, process.env.SECRET_JWT, { expiresIn: 86400 })
}