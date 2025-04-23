const mongoose = require("mongoose");

const forgotSchema = new mongoose.Schema({
  FPUserEmail: String,
  FPOTP: String,
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 10 * 1000
  },
}, {
  timestamps: true,
});

const ForgotPassword = mongoose.model("ForgotPassword", forgotSchema, "ForgotPassword");

module.exports = ForgotPassword;
