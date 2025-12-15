import { findByEmail } from "../Repositories/authRepository"
import bcrypt from "bcryptjs"
import { generateToken } from "../Utils/jwt"


export const loginService = async(email: string, password: string)=>{
    const user = await findByEmail(email)
    if(!user) throw new Error("invalid email")

    const match = await bcrypt.compare(password, user.userPassword)
    if(!match) throw new Error("invalid password")

    const token = generateToken({
        id: user.u_id,
        email: user.userEmail
    })

    return {user, token}
    


}