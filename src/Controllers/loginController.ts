import { Request, Response } from "express"
import {loginService} from "../Services/loginService"
import { loginSchema } from "../Validations/loginValidation";

export const login = async(req:Request, res: Response)=>{
    try{
        await loginSchema.validate(req.body);

        const {user, token} = await loginService(req.body.userEmail, req.body.userPassword);

        return res.status(200).json({
            message: "login success",
            token,
            user
        })

    }catch(err: any){
        return res.status(400).json({message: err.message})
    }
}