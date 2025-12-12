import { findByEmail } from "../Repositories/authRepository"
import bcrypt from "bcryptjs"
import { generateToken } from "../Utils/jwt"
import {transporter} from "../Utils/nodemailer"
import {redisPublisher, redisSubscriber } from "../Utils/redis"


export const loginService = async(email: string, password: string)=>{
    const user = await findByEmail(email)
    if(!user) throw new Error("invalid email")

    const match = await bcrypt.compare(password, user.userPassword)
    if(!match) throw new Error("invalid password")

    const token = await generateToken({
        id: user.u_id,
        email: user.userEmail
    })

    await redisPublisher.publish("login-email", JSON.stringify({userEmail: user.userEmail, token}))
    
    // const msg = {
    //     to: user.userEmail,
    //     from: "thabitha.panneerselvam@rootquotient.com",  
    //     subject: "Your Login Verification Token",
    //     html: `
    //         <h2>Login Verification</h2>
    //         <p>Your token is:</p>
    //         <h1>${token}</h1>
    //         <p>Valid for 1 day.</p>
    //     `
    // };
    // console.log("message",msg)
    // await sgMail.send(msg)
    return {user, token, message: "token is sent to email"}

}