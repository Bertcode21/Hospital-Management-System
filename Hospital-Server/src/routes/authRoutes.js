const express = require('express');

const {
    register,
    login,
    getMe
} = require("../controllers/authController")

/// set them 
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/me", protect, getMe);

module.exports = router;