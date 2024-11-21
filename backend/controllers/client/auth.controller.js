const User = require("../../models/user.model");
const md5 = require("md5");

const systemConfig = require("../../config/system");

// // [GET] /auth/login
module.exports.login = (req, res) => {
  if (req.cookies.user_token) {
    // console.log(req.cookies.user_token);
    // res.redirect(`/`);
    res.json({
      code: 406,
      message: "Người dùng đã đăng nhập"
    })
  } else {
    // res.render("client/pages/auth/login", {
    //   pageTitle: "Đăng nhập",
    // });
    res.json({
      code: 200,
      message: "Kết nối máy chủ thành công"
    })
  }
};

// // [POST] /auth/login
module.exports.loginPost = async (req, res) => {
  const { UserEmail, UserPassword } = req.body;
  const user = await User.findOne({
    UserEmail: UserEmail,
    UserDeleted: 1,
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

  if (md5(UserPassword) != user.UserPassword) {
    // req.flash("error", "Sai mật khẩu!");
    // res.redirect("back");
    res.json({
      code: 400,
      message: "Sai mật khẩu!"
    })
    return;
  }

  if (user.UserStatus != 1) {
    // req.flash("error", "Tài khoản đang bị khóa!");
    // res.redirect("back");
    res.json({
      code: 400,
      message: "Tài khoản đang bị khóa!"
    })
    return;
  }

  res.cookie("user_token", user.UserToken);
  // req.flash("success", "Đăng nhập thành công!");
  // res.redirect(`/`);
  res.json({
    code: 200,
    message: "Đăng nhập thành công!"
  })
};

// [GET] /auth/logout
module.exports.logout = (req, res) => {
  res.clearCookie("user_token");
  // res.redirect(`/auth/login`);
  res.json({
    code: 200,
    message: "Đăng xuất thành công!"
  })
};

// [GET] /auth/register
module.exports.register = (req, res) => {
  if (req.cookies.user_token) {
    // console.log(req.cookies.user_token);
    // res.redirect(`/`);
    res.json({
      code: 406,
      message: "Người dùng đã đăng nhập"
    })
  } else {
    // res.render("client/pages/auth/register", {
    //   pageTitle: "Đăng nhập",
    // });
    res.json({
      code: 200,
      message: "Kết nối máy chủ thành công"
    })
  }
};

// [POST] /auth/register
module.exports.registerPost = async (req, res) => {
  const exitEmail = await User.findOne({
    UserDeleted: 1,
    UserEmail: req.body.UserEmail
  })

  if (exitEmail) {
    // req.flash("error", "Email đã tồn tại!")
    // res.redirect("back")
    res.json({
      code: 400,
      message: "Email đã tồn tại!"
    })
    return;
  }
  req.body.UserPassword = md5(req.body.UserPassword)
  const user = new User(req.body)
  await user.save();

  res.cookie("user_token", user.UserToken);
  // req.flash("success", "Đăng ký thành công!");
  // res.redirect(`/`);
  res.json({
    code: 200,
    message: "Đăng ký thành công!"
  })
};