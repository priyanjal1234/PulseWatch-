import redis from "../config/redis.js";

export const acquireLock = async function(key,ttl = 10000) {
    const result = await redis.set(key,"locked",'PX', ttl, 'NX')
    return result === "OK"
}

export const releaseLock = async function(key) {
    await redis.del(key)
}