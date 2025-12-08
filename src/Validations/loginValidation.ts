import Joi from "joi"

export const loginSchema = Joi.object({
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().min(6).required()
})
