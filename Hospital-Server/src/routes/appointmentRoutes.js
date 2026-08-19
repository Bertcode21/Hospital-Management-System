const express = require("express");

const {
    getAppointments 
} = require("../controllers/appointmentController");

router = express.Router();

router.get("/",getAppointments);

module.exports = router;