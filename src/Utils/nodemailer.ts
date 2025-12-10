import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false,
    port: 587,
    auth:{
        user: "thabitha.pvst@gmail.com",
        pass: "yrwt sksv zusk uyuw"
    }
})