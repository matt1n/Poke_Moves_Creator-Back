import { Router } from "express";
import { deleteComment, getMoveComments, postComment, updateComment } from "../controllers/comments.controllers.js";
import { tokenValidation } from "../middlewares/tokenValidation.middleware.js";

const commentsRoutes = Router()

commentsRoutes
.get("/moves/:moveId/comments", tokenValidation, getMoveComments)
.post("/moves/:moveId/comments", tokenValidation, postComment)
.put("/moves/:moveId/comments/:commentId", tokenValidation, updateComment)
.delete("/moves/:moveId/comments/:commentId", tokenValidation, deleteComment)

export default commentsRoutes