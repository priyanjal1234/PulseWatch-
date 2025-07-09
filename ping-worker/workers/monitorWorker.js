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

      let lastLog = await logModel
        .findOne({ monitorId })
        .sort({ timestamp: -1 });
      let newLog = await logModel.create({
        monitorId,
        user: userId,
        status,
        responseTime,
      });
      console.log(newLog)
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
