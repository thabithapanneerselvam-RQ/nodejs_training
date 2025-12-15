import * as dotenv from "dotenv";
dotenv.config();


export function getUsername(){
    return process.env.USERNAME
}