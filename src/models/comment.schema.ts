import joi from "joi"

export const CommentSchema = joi.object({
    message: joi.string().required()
})