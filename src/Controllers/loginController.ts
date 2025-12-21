import { Request, Response } from "express"
import {loginService} from "../Services/loginService"
import { loginSchema} from "../Validations/loginValidation";
import {uploadSchema} from "../Validations/uploadValidation"
import { generatedUrl } from "../Utils/s3fileurl";

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
        return res.status(500).json({message: err.message})
    }
}

export const uploadPhoto = async(req: Request, res: Response)=>{
    try{
        await uploadSchema.validate(req.body)

        const generated = await generatedUrl(req.body.fileName, req.body.contentType)
        return res.status(200).json({url: generated})

    }catch(err: any){
        return res.status(400).json({message: err.message})
    }
}