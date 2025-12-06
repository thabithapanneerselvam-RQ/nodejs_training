import {Request, Response} from  "express";

import * as dotenv from "dotenv";
dotenv.config();

const res = Response;

export function getUsername(){
    return process.env.USERNAME
}