// import Joi from "joi"

// export const loginSchema = Joi.object({
//     userEmail: Joi.string().email().required(),
//     userPassword: Joi.string().min(6).required()
// })


import { z } from "zod";

export const loginSchema = z.object({
    userEmail: z.email({ message: "Invalid email" }),
  userPassword: z.string().min(6, "Password must be at least 6 characters"),
});
