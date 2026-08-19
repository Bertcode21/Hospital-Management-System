const express = require("express");

const {
    getDoctors,
    getDoctor
} = require("../controllers/doctorController");

const router = express.Router();

router.get('/', getDoctors);

router.get('/:id', getDoctor);

module.exports = router;