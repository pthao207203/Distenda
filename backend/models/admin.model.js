const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  AdminFullName: String,
  AdminEmail: String,
  AdminPassword: String,
  AdminToken: String,
  AdminPhone: String,
  AdminAvatar: String,
  AdminLevel: String,
  AdminExp: String,
  AdminRole_id: String,
  AdminStatus: Number,
  AdminSalary: Number,
  AdminDeleted: {
    type: Number,
    default: 1,
  },
  createdBy: {
    UserId: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  editedBy: [
    {
      UserId: String,
      editedAt: Date,
    },
  ],
  deletedBy: {
    UserId: String,
    deletedAt: Date,
  },
});

const Admin = mongoose.model("Admin", adminSchema, "Admin");

module.exports = Admin;
