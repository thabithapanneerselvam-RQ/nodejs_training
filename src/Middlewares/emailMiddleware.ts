// import { transporter } from "../Utils/nodemailer";



// export const sendMail = (req,res,next)=>{
//     const {user, token} = req.loginData
//     transporter.sendMail({
//         from: "thabitha.pvst@gmail.com",
//         to: user.userEmail,
//         subject: "your token",
//         html:
//         `<h2>login verification</h2>
//         <p>your token is:</p>
//         <h1>${token}</h1>
//         <p>valid for 1 day</p>`

//     })
//     .then(()=>{
//         console.log("success email sent")
//     }).catch((err)=>{
//         console.log("error sending email", err.message)
//     })
//     next()
// }
