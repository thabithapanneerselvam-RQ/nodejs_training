import { Request, Response, NextFunction } from "express";
import {verifyToken} from "../Utils/jwt"


export const authUser = async(req: Request, res:Response, next: NextFunction)=>{
    const header = req.headers.authorization

    if(!header){
        throw new Error("no token is attached")
    }

    const token = header.split(" ")[1]
    
    try{
        const result = await verifyToken(token);
        console.log("result", result);
        next()
    }catch(err){
        return res.status(400).json({message: "invalid token"})
    }
}