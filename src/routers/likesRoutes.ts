import { Router } from "express";
import { deleteLike, postLike } from "../controllers/likes.controllers.js";
import { tokenValidation } from "../middlewares/tokenValidation.middleware.js";

const likesRoutes = Router()

likesRoutes
.post("/like/:id", tokenValidation, postLike)
.delete("/like/:id", tokenValidation, deleteLike)

export default likesRoutes