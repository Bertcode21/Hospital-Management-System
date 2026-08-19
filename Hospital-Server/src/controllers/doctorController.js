const Doctor = require("../model/doctormodel");
const getDoctors = async (req, res) =>{
    try{
   // get the doctors
    const doctors = await Doctor.find().populate(
        "user",
        "firstName lastName email phone profileImage"
      ).sort({ createdAt: -1 });

      res.json({
        success: true,
        count:  doctors.length,
        doctors: []

      })
    }catch{
      res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}

const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(
      req.params.id
    ).populate(
      "user",
      "firstName lastName email phone profileImage"
    );

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    res.json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
    getDoctors,
    getDoctor
}