import {createClient} from "redis"

export const redisPublisher = createClient();
export const redisSubscriber = createClient();

redisPublisher.on('error',(err)=>{
    console.log("error in connecting redis", err)
})
redisSubscriber.on('error',(err)=>{
    console.log("error in connecting redis", err)
})


export async function initializeRedisClient(){
    if(redisPublisher.isOpen){
        return redisPublisher;
    }
    if(redisSubscriber.isOpen){
        return redisSubscriber;
    }
    await redisPublisher.connect();
    await redisSubscriber.connect();
    await redisPublisher.ping()
    await redisSubscriber.ping()
    console.log("connected to redis")

    return {redisPublisher,redisSubscriber};
}

