const getBills = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: 0,
      bills: [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBill = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      bill: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createBill = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Bill created successfully",
      bill: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getBills,
  getBill,
  createBill,
};