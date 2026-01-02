import express from "express"
import signupRoutes from "./Routes/signupRoutes"
import loginRoutes from "./Routes/loginRoutes"
import { globalErrorHandler } from "./Middlewares/globalErrorHandler"

const app = express()

app.use(express.json())
app.use("/api/auth", signupRoutes, loginRoutes)

app.use(globalErrorHandler)

export default app;