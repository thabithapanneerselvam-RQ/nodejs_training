import { redisSubscriber } from "../Utils/redis";
import { transporter } from "../Utils/nodemailer";

async function startWorker(){
    await redisSubscriber.subscribe("login-email", async(message)=>{
        const {email, token} = JSON.parse(message)
        console.log("received email", email)

        try{
            await transporter.sendMail({
                to: email,
                from: "thabitha.panneerselvam@rootquotient.com",  
                subject: "Your Login Verification Token",
                html: `
                    <h2>Login Verification</h2>
                    <p>Your token is:</p>
                    <h1>${token}</h1>
                    <p>Valid for 1 day.</p>
                `
            })
            console.log("email sent to:", email)
        }catch(error){
            console.log("error is sending email", error)
        }
    })
}

startWorker()