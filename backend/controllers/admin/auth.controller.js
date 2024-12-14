const Admin = require("../../models/admin.model");
const Setting = require("../../models/setting.model");
const md5 = require("md5");

const systemConfig = require("../../config/system");

// [GET] /admin/auth/login
module.exports.login = (req, res) => {
  console.log(req.cookies.token);
  if (req.cookies.token) {
    console.log(req.cookies.token);
    res.redirect(`${systemConfig.prefixAdmin}/dashboard`);
  } else {
    res.render("admin/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};

// [POST] /admin/auth/login
module.exports.loginPost = async (req, res) => {
  const { AdminEmail, OTP } = req.body;
  console.log(AdminEmail);
  const user = await Admin.findOne({
    AdminEmail: AdminEmail,
    AdminDeleted: 1,
  });

  if (!user) {
    req.flash("error", "Email không tồn tại!");
    res.redirect("back");
    return;
  }

  if (user.AdminStatus != 1) {
    req.flash("error", "Tài khoản đang bị khóa!");
    res.redirect("back");
    return;
  }
  console.log(user);

  res.cookie("token", user.AdminToken);
  res.json({
    code: 200,
    message: "Đăng nhập thành công!"
  })
  // req.flash("success", "Đăng nhập thành công!");
  // res.redirect(`${systemConfig.prefixAdmin}/dashboard`);
};

// [GET] /admin/auth/logout
module.exports.logout = (req, res) => {
  res.clearCookie("token");
  // res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
  res.json({
    code: 200,
    message: "Đăng xuất thành công!"
  })
};

// [GET] /admin/auth/setting
module.exports.setting = async (req, res) => {
  const setting = await Setting.findOne({}).lean()
  res.json(setting)
};