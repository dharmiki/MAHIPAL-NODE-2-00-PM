const User = require("../models/User");
const bcrypt = require("bcrypt");
const OTP = require("../models/OTP");
const { generateToken } = require("../utils/Token");
const { sendOTP } = require("../utils/sendOTP");

exports.register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({ ...req.body, password: hash });
  res.json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).select("+password");
  if (!user || !(await bcrypt.compare(req.body.password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  generateToken(user._id, res);
  res.json(user);
};

exports.logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.json({ message: "Logged out" });
};

exports.forgotPassword = async (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  await OTP.findOneAndUpdate(
    { email: req.body.email },
    { otp, expireAt: Date.now() + 10 * 60 * 1000 },
    { upsert: true }
  );
  await sendOTP(req.body.email, otp);
  res.json({ message: "OTP sent" });
};
