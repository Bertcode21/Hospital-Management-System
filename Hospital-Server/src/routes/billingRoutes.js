const express = require("express");

const {
  getBills,
  getBill,
  createBill,
} = require("../controllers/billingController");

const router = express.Router();

router.get("/", getBills);

router.get("/:id", getBill);

router.post("/", createBill);

module.exports = router;