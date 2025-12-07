import * as dotenv from "dotenv";
dotenv.config();
import {getUsername} from "./getUsername";
import { AppDataSource } from "./Config/data_source";
import express, { Request, Response }from  "express";
 
const app = express()

app.get("/api/user", (_req:Request, res:Response)=>{
    res.json({
        port: process.env.PORT,
        username: getUsername(),

    })
})



AppDataSource.initialize()
.then(()=>{
    console.log(`server connection successfull in ${process.env.POSTGRES_PORT}`)

    app.listen(process.env.PORT, ()=>{
        console.log("Server running on port 5000")
    })
})
.catch((err)=>{
    console.error("error connecting to postgres DB")
})


 