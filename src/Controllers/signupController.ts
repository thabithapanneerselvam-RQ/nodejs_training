import { Request,Response } from "express"
import { signupService } from "../Services/signupService";
import { signupSchema } from "../Validations/signupValidation";


export const signup = async(req: Request,res: Response)=>{
    try{
                console.log(req.body)
        await signupSchema.validate(req.body);
        const user = await signupService(req.body)

        return res.status(200).json({
            message: "signup successfull",
            user
        })

    }catch(err:any){
        return res.status(400).json({message: err.message})
    }
}