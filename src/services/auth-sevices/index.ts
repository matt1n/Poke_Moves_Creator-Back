import bcrypt from "bcrypt"
import { conflict } from "../../errors/conflict.js"
import { notFoundError } from "../../errors/not-found-error.js"
import { findTrainer, generateToken, insertTrainer } from "../../repositories/auth.repositories.js"


async function signInTrainer(email: string, password: string){
    const trainer = await findTrainer(email)
    if (!trainer || !bcrypt.compareSync(password, trainer.password)){
        throw notFoundError()
    }

    return generateToken(trainer.id)
}

async function signUpTrainer(body: {name: string, email: string, password: string, image: string}){
    const {email, password} = body
    const passwordHash = bcrypt.hashSync(password, 12)
    body.password = passwordHash
    const move = await findTrainer(email)
    if (move){
        throw conflict()
    }
    insertTrainer(body)
}

export {
    signInTrainer,
    signUpTrainer
}