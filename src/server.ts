import * as dotenv from "dotenv";
dotenv.config();
import {getUsername} from "./getUsername";
import { AppDataSource } from "./Config/data_source";
import express, { Request, Response }from  "express";
import signupRoutes from "./Routes/signupRoutes"
import loginRoutes from "./Routes/loginRoutes"
 
const app = express()

app.use(express.json())

app.get("/api/user", (_req:Request, res:Response)=>{
    res.json({
        port: process.env.PORT,
        username: getUsername(),

    })
})

app.use("/api/auth", signupRoutes, loginRoutes)


AppDataSource.initialize()
.then(()=>{
    console.log(`server connection successfull in ${process.env.POSTGRES_PORT}`)

    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.error("error connecting to postgres DB", err)
})


 