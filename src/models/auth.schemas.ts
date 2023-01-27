import Joi from "joi";


export const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().trim().required()
})

export const signUpSchema = Joi.object({
    name:Joi.string().min(3).trim().required(),
    email:Joi.string().email().trim().required(),
    password:Joi.string().alphanum().trim().required(),
    image:Joi.string().pattern(/\.(jpg|jpeg|png|webp|avif|gif)$/, 'image_url').required()
})
