const Admin = require("../../models/admin.model");
const md5 = require("md5");

const systemConfig = require("../../config/system");

module.exports.login = (req, res) => {
  res.render("admin/pages/auth/login", {
    pageTitle: "Đăng nhập"
  });
}

module.exports.loginPost = async (req, res) => {
  const { AdminEmail, AdminPassword } = req.body;

  const user = await Admin.findOne({
    AdminEmail: AdminEmail,
    AdminDeleted: 1
  });

  if(!user) {
    req.flash("error", "Email không tồn tại!");
    res.redirect("back");
    return;
  }

  if(md5(AdminPassword) != user.AdminPassword) {
    req.flash("error", "Sai mật khẩu!");
    res.redirect("back");
    return;
  }

  if(user.AdminStatus != 1) {
    req.flash("error", "Tài khoản đang bị khóa!");
    res.redirect("back");
    return;
  }

  res.cookie("TOKEN", user.AdminToken);
  res.redirect(`${systemConfig.prefixAdmin}/dashboard`);
}

module.exports.logout = (req, res) => {
  res.clearCookie("TOKEN");
  res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
}