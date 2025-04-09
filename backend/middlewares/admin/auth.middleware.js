const systemConfig = require("../../config/system");
const Admin = require("../../models/admin.model");
const Role = require("../../models/role.model");

module.exports.requireAuth = async (req, res, next) => {
  // console.log("cookies ", req.cookies.token)
  if (!req.cookies.token) {
    res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
    return;
  }
  const user = await Admin.findOne({
    AdminToken: req.cookies.token,
    AdminDeleted: 1,
    AdminStatus: 1,
  }).select("-AdminPassword");

  if (!user) {
    res.clearCookie("token");
    res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
    return;
  }

  const role = await Role.findOne({
    _id: user.AdminRole_id,
  }).select("RoleName RolePermissions");

  res.locals.user = user;
  res.locals.role = role;

  next();
};
