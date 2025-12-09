import { Router } from "express";
import {login, uploadPhoto} from "../Controllers/loginController"
import { authUser } from "../Middlewares/authMiddleware";


const router = Router()

router.post("/login", login)

router.get("/authorize", authUser,(req,res)=>{
    return res.json({message: "authorized user"})
})

router.post("/upload",uploadPhoto)

export default router;