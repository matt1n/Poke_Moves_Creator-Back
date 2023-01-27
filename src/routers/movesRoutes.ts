import { Router } from "express";
import { addMove, deleteMove, getMove, getMoveByCategory, updateMove } from "../controllers/moves.controllers.js";
import { bodyValidate } from "../middlewares/bodyValidation.middleware.js";
import { tokenValidation } from "../middlewares/tokenValidation.middleware.js";
import { MoveSchema } from "../models/move.schema.js";

const movesRoutes = Router()

movesRoutes
.post("/move", tokenValidation, bodyValidate(MoveSchema), addMove)
.get("/moves", getMove)
.get("/moves/:category", getMoveByCategory)
.put("/move/:id",tokenValidation, bodyValidate(MoveSchema), updateMove)
.delete("/move/:id",tokenValidation, deleteMove)

export {movesRoutes}