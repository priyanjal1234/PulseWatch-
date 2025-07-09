import dotenv from "dotenv";
dotenv.config();

import { Queue } from "bullmq";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

redis.on("connect", function () {
  console.log("Redis Connected");
});

redis.on("error", (err) => {
  console.error("❌ Redis connection error:", err);
});

const monitorQueue = new Queue("monitorQueue", {
  connection: redis,
});

await monitorQueue.obliterate({force: true})

export default monitorQueue
