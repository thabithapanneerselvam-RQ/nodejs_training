import { findByEmail } from "../Repositories/authRepository"
import bcrypt from "bcryptjs"
import { generateToken } from "../Utils/jwt"
import {transporter} from "../Utils/nodemailer"
import sgMail from "../Utils/sendgrid"


export const loginService = async(email: string, password: string)=>{
    const user = await findByEmail(email)
    if(!user) throw new Error("invalid email")

    const match = await bcrypt.compare(password, user.userPassword)
    if(!match) throw new Error("invalid password")

    const token = generateToken({
        id: user.u_id,
        email: user.userEmail
    })

    // await transporter.sendMail({
    //     from: "thabitha.pvst@gmail.com",
    //     to: user.userEmail,
    //     subject: "your token",
    //     html:
    //     `<h2>login verification</h2>
    //     <p>your token is:</p>
    //     <h1>${token}</h1>
    //     <p>valid for 1 day</p>`

    // })

    const msg = {
        to: user.userEmail,
        from: "thabitha.panneerselvam@rootquotient.com",  
        subject: "Your Login Verification Token",
        html: `
            <h2>Login Verification</h2>
            <p>Your token is:</p>
            <h1>${token}</h1>
            <p>Valid for 1 day.</p>
        `
    };
    console.log("message",msg)
    await sgMail.send(msg)
    return {user, token, message: "token is sent to email"}

}