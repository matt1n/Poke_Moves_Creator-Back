import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { bodyValidate } from "../middlewares/bodyValidation.middleware.js";
import { signInSchema, signUpSchema } from "../models/auth.schemas.js";

const authRoutes = Router() 

authRoutes
.post("/" ,bodyValidate(signInSchema) ,signIn)
.post("/signup" ,bodyValidate(signUpSchema) ,signUp)

export {authRoutes}