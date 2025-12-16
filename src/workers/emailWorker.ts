import { Worker } from "bullmq";
import { redisConnection } from "../Utils/redis";
import { transporter } from "../Utils/nodemailer";

export const emailWorker = new Worker("email-queue",
    async (job)=>{
        try{
            const {email, token} = job.data;
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
            await new Promise(resolve=> setTimeout(resolve, 3000))
            console.log(`email sent to ${email}`)


        }catch(err){
            console.error("error in processing job from queue",err)
        }
    }, {connection: redisConnection})


    emailWorker.on("completed", (job)=>{
        console.log(`success in sending email of job id:${job.id}`)
    })

    emailWorker.on("failed", (job, err)=>{
        console.log(`error in sending email of job id:${job?.id} with error message:${err.message}`)
    })