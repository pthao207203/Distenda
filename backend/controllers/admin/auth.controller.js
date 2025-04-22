const Admin = require("../../models/admin.model");
const Setting = require("../../models/setting.model");
const ForgotPassword = require("../../models/forgotpw.model");
const generateHelper = require("../../helpers/generate")
const sendMailHelper = require("../../helpers/sendMail")

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
  const { AdminEmail } = req.body;
  console.log(AdminEmail);
  const user = await Admin.findOne({
    AdminEmail: AdminEmail,
    AdminDeleted: 1,
  });

  if (!user) {
    // req.flash("error", "Email không tồn tại!");
    // res.redirect("back");
    res.json({
      code: 400,
      message: "Email không tồn tại!"
    })
    return;
  }

  if (user.AdminStatus != 1) {
    res.json({
      code: 400,
      message: "Tài khoản đang bị khóa!"
    })
    // req.flash("error", "Tài khoản đang bị khóa!");
    // res.redirect("back");
    return;
  }
  console.log(user);

  const otp = generateHelper.generateRandomNumber(6)
  const objectForgotPw = {
    FPUserEmail: AdminEmail,
    FPOTP: otp,
    expireAt: Date.now(),
  }
  console.log(objectForgotPw)
  const forgotPw = new ForgotPassword(objectForgotPw)
  await forgotPw.save()

  //Tồn tại nên gửi Email
  const Subject = "DISCENDA_Mã OTP xác minh lấy lại mật khẩu"
  const html = `
    <div><span style="font-family: 'times new roman', times, serif; font-size: 14pt; color: #000000;">Xin ch&agrave;o <strong>${user.UserFullName}</strong>,</span></div>
    <div>&nbsp;</div>
    <div><span style="font-family: 'times new roman', times, serif; font-size: 14pt; color: #000000;">Đ&acirc;y l&agrave; m&atilde; x&aacute;c nhận lấy lại mật khẩu của bạn:</span></div>
    <div><span style="font-size: 18pt; font-family: 'times new roman', times, serif; color: #000000;"><strong>${otp}</strong></span></div>
    <div><span style="font-family: 'times new roman', times, serif; font-size: 14pt; color: #000000;">Thời hạn để sử dụng m&atilde; l&agrave; 10 ph&uacute;t.</span></div>
    <div><span style="font-family: 'times new roman', times, serif; font-size: 14pt; color: #000000;">Nếu bạn kh&ocirc;ng gửi y&ecirc;u cầu, h&atilde;y bỏ qua hộp thư n&agrave;y.</span></div>
    <p>&nbsp;</p>
    <div><span style="font-family: 'times new roman', times, serif; font-size: 14pt; color: #000000;">Xin cảm ơn,</span></div>
    <div><span style="font-family: 'times new roman', times, serif; font-size: 14pt; color: #000000;"><strong>DISCENDA.</strong></span></div>
  `
  sendMailHelper.sendMail(AdminEmail, Subject, html)

  // res.cookie("token", user.AdminToken);
  res.json({
    code: 200,
    message: "Gửi OTP thành công!"
  })
  // req.flash("success", "Đăng nhập thành công!");
  // res.redirect(`${systemConfig.prefixAdmin}/dashboard`);
};

// [POST] /admin/auth/login-confirm
module.exports.passwordOTP = async (req, res) => {
  const AdminEmail = req.body.AdminEmail
  const OTP = req.body.OTP
  console.log(AdminEmail, OTP)

  const result = await ForgotPassword.findOne({
    FPUserEmail: AdminEmail,
    FPOTP: OTP
  })
  if (!result) {
    res.json({
      code: 400,
      message: "OTP không hợp lệ!"
    })
    return;
  }

  const admin = await Admin.findOne({
    AdminEmail: AdminEmail
  })
  res.cookie("token", admin.AdminToken)

  res.json({
    code: 200,
    message: "Đăng nhập thành công!"
  })
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
  const setting = await Setting.findOne().lean()
  res.json(setting)
};