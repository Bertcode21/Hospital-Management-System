const express = require("express");

const {
  getLaboratoryTests,
  getLaboratoryTest,
  createLaboratoryTest,
} = require("../controllers/laboratoryController");

const router = express.Router();

// Get all laboratory tests
router.get("/", getLaboratoryTests);

// Get one laboratory test
router.get("/:id", getLaboratoryTest);

// Create laboratory test
router.post("/", createLaboratoryTest);

module.exports = router;