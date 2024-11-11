const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    AdminFullName: String,
    AdminEmail: String,
    AdminPassword: String,
		AdminToken: String,
    AdminPhone: String,
    AdminAvatar: String,
    AdminRole_id: String,
    AdminStatus: Number,
    AdminDeleted: {
      type: Number,
      default: 1,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema, "Admin");

module.exports = Admin;