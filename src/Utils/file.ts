import { S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv"
dotenv.config()

const s3 = new S3Client({region: process.env.AWS_REGION})

export async function generatedUrl(fileName: string, contentType: string){
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName,
        ContentType: contentType
    })

const signedUrl = await getSignedUrl(s3, command, {expiresIn: 500})
return signedUrl;

}
