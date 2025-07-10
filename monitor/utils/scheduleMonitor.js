import monitorModel from "../models/monitor.model.js";
import monitorQueue from "./queue.js";

async function scheduleMonitor() {
  const monitors = await monitorModel.find({ isActive: true });

  for (const monitor of monitors) {
    let jobId = `monitor-${monitor._id}`;

    monitorQueue.add(
      jobId,
      {
        monitorId: monitor._id.toString(),
        userId: monitor.user.toString(),
        url: monitor.url,
      },
      {
        repeat: {
          every: monitor.interval * 1000,
        },
        removeOnComplete: true,
        removeOnFail: true,
      }
    );
  }
}

export default scheduleMonitor
