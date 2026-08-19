const express = require("express");

const {
    getMedicine
} = require("../controllers/pharmacyController");

const router = express.Router();

router.get("/", getMedicine);

module.exports = router;