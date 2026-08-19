const Patient = require("../model/patientmodel");

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find()
      .populate(
        "user",
        "firstName lastName email phone profileImage"
      )
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: patients.length,
      patients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(
      req.params.id
    ).populate(
      "user",
      "firstName lastName email phone profileImage"
    );

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found.",
      });
    }

    res.json({
      success: true,
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getPatients,
  getPatient,
};