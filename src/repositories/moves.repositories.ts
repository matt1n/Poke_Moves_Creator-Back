import { QueryResult } from "pg";
import prisma from "../db/db.js";
import { BodyMove, Move } from "../protocols/Move.js";

export async function insertMove(body: Move){
    const {name, description, category, power, accuracy, type, pp, trainer_id} = body
    await prisma.moves.create({data: {
        name, description, category, power, accuracy, type, pp, trainer_id
    }})
}

export async function selectAllMoves(){
    const data = prisma.moves.findMany();
    return data;
}

export async function selectMovesByCategory(category: string) {
    return await prisma.moves.findMany({where: {category}})
}

export async function updateMoveById(body: BodyMove, id: number){
    await prisma.moves.update({where: {id: id}, data: body})
}

export async function deleteMoveById(id: number){
    await prisma.moves.delete({where: {id: id}})
}

export async function selectMovesById(id:number){
    return await prisma.moves.findUnique({where: {id: id}})
}