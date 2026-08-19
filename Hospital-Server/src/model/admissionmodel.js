const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    // Patient being admitted
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    // Doctor responsible for the patient
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    // Room information
    roomNumber: {
      type: String,
      required: true,
      trim: true,
    },

    // Bed information
    bedNumber: {
      type: String,
      required: true,
      trim: true,
    },

    // Reason for admission
    reason: {
      type: String,
      required: true,
      trim: true,
    },

    // Medical condition / diagnosis
    diagnosis: {
      type: String,
      trim: true,
    },

    // Date patient was admitted
    admissionDate: {
      type: Date,
      default: Date.now,
      required: true,
    },

    // Date patient was discharged
    dischargeDate: {
      type: Date,
      default: null,
    },

    // Current admission status
    status: {
      type: String,
      enum: [
        "admitted",
        "discharged",
        "transferred",
        "cancelled",
      ],
      default: "admitted",
    },

    // Additional notes
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admission", admissionSchema);