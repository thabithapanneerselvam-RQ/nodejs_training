import * as dotenv from "dotenv";
dotenv.config();

import {getUsername} from "./getUsername";

import express, { Request, Response }from  "express";
 const app = express()



app.get("/api/user", (_req:Request, res:Response)=>{
    res.json({
        port: process.env.PORT,
        username: getUsername(),

    })
})


 app.listen(process.env.PORT, ()=>{
    console.log("Server running on port 5000")

 })