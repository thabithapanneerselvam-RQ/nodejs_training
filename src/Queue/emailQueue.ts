import { Queue } from "bullmq";
import {redisConnection} from "../Utils/redis"

export const emailQueue = new Queue("email-queue",{
    connection: redisConnection,
})

