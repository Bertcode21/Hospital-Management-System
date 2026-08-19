const mongoose = require("mongoose");

const laboratorySchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },

    testName: {
      type: String,
      required: true,
      trim: true,
    },

    testType: {
      type: String,
      trim: true,
    },

    result: {
      type: String,
      default: "",
    },

    normalRange: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "requested",
        "processing",
        "completed",
        "cancelled",
      ],
      default: "requested",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Laboratory",
  laboratorySchema
);