const express = require("express");
const router = express.Router();
const { loginUser, signupUser } = require("../controllers/userController");


// LOG_IN
router.post("/login", loginUser);

// SIGN_UP
router.post("/signup", signupUser);

module.exports = router;
