const Appointment = require("../model/appointmentmodel");

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate({
        path: "patient",
        populate: {
          path: "user",
          select: "firstName lastName email phone",
        },
      })
      .populate({
        path: "doctor",
        populate: {
          path: "user",
          select: "firstName lastName",
        },
      })
      .sort({ appointmentDate: 1 });

    res.json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAppointments,
};