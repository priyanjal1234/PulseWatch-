import dotenv from 'dotenv'
dotenv.config()

import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL,{
    maxRetriesPerRequest: null,
    enableReadyCheck: false
})

redis.on("connect",function() {
    console.log("Redis Connected")
})

redis.on("error",function(error) {
    console.log(`Error connecting with redis: ${error}`)
})

export default redis