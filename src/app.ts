import express from "express"
import signupRoutes from "./Routes/signupRoutes"
import loginRoutes from "./Routes/loginRoutes"

const app = express()

app.use(express.json())
app.use("/api/auth", signupRoutes, loginRoutes)

export default app;