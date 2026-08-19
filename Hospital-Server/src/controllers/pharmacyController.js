const Medicine = require("../model/medicinemodel");

const getMedicine = async (req, res ) =>{
    try{
       
        const med = await Medicine.find().sort({ name: 1})

        res.status(200).json({
            success: true,
            message: "Medicine loaded succesful",
            count: med.length,
            med
        })
    }catch(error){
     res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}

module.exports = {
    getMedicine,
}