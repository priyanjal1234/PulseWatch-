import mongoose from "mongoose";

const monitorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    interval: {
      type: Number,
      default: 60,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastStatus: {
      type: String,
      enum: ["up", "down"],
    },
  },
  { timestamps: true }
);

const monitorModel = mongoose.model("monitor", monitorSchema);

export default monitorModel;
