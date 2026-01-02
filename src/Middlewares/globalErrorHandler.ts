import { AppError } from "../Utils/appError";
import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (err: Error,req: Request,res: Response,next: NextFunction)=>{
    let statusCode = 500;
    let message = "internal server error"

    if(err instanceof AppError){
        statusCode = err.statusCode
        message = err.message
    }

    console.log(err)

    return res.status(statusCode).json({
        success: false,
        message
    })
}