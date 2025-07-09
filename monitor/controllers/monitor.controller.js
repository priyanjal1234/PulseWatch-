import monitorModel from "../models/monitor.model.js";
import monitorQueue from "../utils/queue.js";

export const createMonitor = async function (req, res) {
  try {
    let { url, interval } = req.body;
    let userId = req.user.id;
    let monitor = await monitorModel.create({
      user: userId,
      url,
      interval,
    });
    await monitorQueue.add(
      `monitor-${monitor._id}`,
      { monitorId: monitor._id.toString(),userId: userId.toString() , url, userId },
      { repeat: { every: interval * 1000 } }
    );

    return res.status(200).json({ message: "Monitor created successfully" });
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error creating monitor",
    });
  }
};

export const getUserMonitors = async function (req, res) {
  try {
    let userId = req.user.id;
    let userMonitors = await monitorModel.find({ user: userId });

    return res.status(200).json(userMonitors);
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error getting monitors",
    });
  }
};

export const updateMonitor = async function (req, res) {
  try {
    let { url, interval } = req.body;
    let { id } = req.params;
    let userId = req.user.id;
    let monitor = await monitorModel.findOne({ user: userId });

    let newMonitor = await monitorModel.findOneAndUpdate(
      { user: userId, _id: id },
      {
        url: url || monitor.url,
        interval: interval || monitor.interval,
      },
      { new: true }
    );

    if (!newMonitor) {
      return res
        .status(401)
        .json({ message: "Error occurred while updating the monitor" });
    } else {
      return res.status(200).json(newMonitor);
    }
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error updating the monitor",
    });
  }
};

export const deleteMonitor = async function (req, res) {
  try {
    let { id } = req.params;
    let userId = req.user.id;
    await monitorModel.findOneAndDelete({ _id: id, user: userId });

    return res.status(200).json({ message: "Monitor Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error deleting the monitor",
    });
  }
};
