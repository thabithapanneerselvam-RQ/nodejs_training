import { Router } from "express";
import {login} from "../Controllers/loginController"


const router = Router()

router.post("/login", login)

export default router;