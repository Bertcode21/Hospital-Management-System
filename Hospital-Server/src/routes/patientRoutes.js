const express = require("express");

const {
  getPatients,
  getPatient,
} = require("../controllers/patientController");

const router = express.Router();

router.get("/", getPatients);

router.get("/:id", getPatient);

module.exports = router;