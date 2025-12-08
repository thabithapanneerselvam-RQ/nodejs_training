import { Router } from "express";
import {signup} from "../Controllers/signupController"


const router = Router()

router.post("/signup", signup)

export default router;