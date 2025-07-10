import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    monitorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: [
      {
        type: String,
        enum: ["up","down"]
      }
    ],
    responseTime: [
      {
        type: Number
      }
    ],
  },
  { timestamps: true }
);

const logModel = mongoose.model("log",logSchema)

export default logModel
