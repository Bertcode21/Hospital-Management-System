const Patient = require("../model/patientmodel");

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find()
      .populate("user", "firstName lastName email phone role");

    patients.sort((a, b) => {
      const nameA = a.user?.firstName?.toLowerCase() || "";
      const nameB = b.user?.firstName?.toLowerCase() || "";

      return nameA.localeCompare(nameB);
    });

    res.status(200).json({
      success: true,
      count: patients.length,
      patients,
    });
  } catch (error) {
    console.error("Get patients error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve patients",
      error: error.message,
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