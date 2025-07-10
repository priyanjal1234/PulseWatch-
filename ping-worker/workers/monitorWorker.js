import { Worker } from "bullmq";
import ping from "../utils/ping.js";
import { acquireLock, releaseLock } from "../utils/lock.js";
import logModel from "../models/log.model.js";
import redis from "../config/redis.js";

new Worker(
  "monitorQueue",
  async function (job) {
    let { monitorId, url, userId } = job.data;
    const lockKey = `lock:${monitorId}`;

    if (!(await acquireLock(lockKey))) return;

    try {
      let { status, responseTime } = await ping(url);

      let updatedLog = await logModel.findOneAndUpdate(
        { monitorId, user: userId },
        {
          $push: {
            status: status,
            responseTime: responseTime,
          },
        },
        {
          upsert: true,
          new: true,
        }
      );
      // console.log(updatedLog)
    } catch (error) {
      console.log(`Error occurred while monitoring: ${error}`);
    } finally {
      await releaseLock(lockKey);
    }
  },
  {
    connection: redis,
    concurrency: 5,
    settings: { retryProcessDelay: 5000 },
  }
);
