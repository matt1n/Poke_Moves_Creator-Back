import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export function tokenValidation(req: Request,res: Response,next: NextFunction){
    const authorization = req.headers.authorization
    if(!authorization){
        return res.sendStatus(401)
    }
    const [schema, token] = authorization.split(' ')
    if (schema !== 'Bearer' || !token) {
        return res.sendStatus(401)
    }

    let errorJWT;
    let decodedJWT;

    jwt.verify(token, process.env.SECRET_JWT, (error, decoded) => {
        errorJWT = error
        decodedJWT = decoded
    })

    if (errorJWT) {
        return res.sendStatus(401)
    }

    res.locals = decodedJWT.id

    next()
}