const otpStore = {}; // Temporary storage (Use Redis for production)

exports.generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.storeOtp = (phone, otp) => {
  otpStore[phone] = otp;
  console.log(`OTP for ${phone}: ${otp}`); // Log for testing
};

exports.verifyOtp = (phone, otp) => otpStore[phone] === otp;
