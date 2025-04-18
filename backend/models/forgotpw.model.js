const mongoose = require("mongoose");

const forgotSchema = new mongoose.Schema({
  FPUserEmail: String,
  FPOTP: String,
  expireAt: {
    type: Date,
    expires: 1000000
  },
}, {
  timestamps: true,
});

const ForgotPassword = mongoose.model("ForgotPassword", forgotSchema, "ForgotPassword");

module.exports = ForgotPassword;
