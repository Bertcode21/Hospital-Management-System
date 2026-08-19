const getLaboratoryTests = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: 0,
      tests: [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getLaboratoryTest = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      test: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createLaboratoryTest = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Laboratory test created successfully",
      test: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getLaboratoryTests,
  getLaboratoryTest,
  createLaboratoryTest,
};