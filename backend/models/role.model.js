const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  RoleName: String,
  RoleDescription: String,
  RolePermissions: {
    type: Array,
    default: [],
  },
  RoleDeleted: {
    type: Number,
    default: 1,
  },
  deletedAt: Date,
}, {timestamps: true});

const Role = mongoose.model('Role', roleSchema, "Role");

module.exports = Role;