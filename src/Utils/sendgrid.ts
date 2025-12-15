import sgMail from "@sendgrid/mail";
import * as dotenv from "dotenv"
dotenv.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default sgMail;