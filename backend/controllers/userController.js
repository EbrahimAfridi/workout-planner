const userModel = require("../models/userModel");

// LOG_IN CONTROLLER
const loginUser = async (req, res) => {
  res.json({ message: "log-in user" });
};

// SIGN_UP CONTROLLER
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
