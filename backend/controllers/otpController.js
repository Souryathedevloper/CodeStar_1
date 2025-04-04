const otpService = require("../services/otpService");

exports.sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;
    const otp = otpService.generateOtp();
    otpService.storeOtp(phone, otp);
    res.status(200).json({ message: "OTP sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send OTP" });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (otpService.verifyOtp(phone, otp)) {
      res.status(200).json({ message: "OTP verified successfully!" });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ error: "OTP verification failed" });
  }
};
