import { Router } from "express";
import { deleteComment, getMoveComments, postComment, updateComment } from "../controllers/comments.controllers.js";
import { tokenValidation } from "../middlewares/tokenValidation.middleware.js";

const commentsRoutes = Router()

commentsRoutes
.get("/move/:moveId/comments", tokenValidation, getMoveComments)
.post("/move/:moveId/comment", tokenValidation, postComment)
.put("/move/:moveId/comment/:commentId", tokenValidation, updateComment)
.delete("/move/:moveId/comment/:commentId", tokenValidation, deleteComment)

export default commentsRoutes