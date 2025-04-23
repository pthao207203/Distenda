const User = require("../../models/user.model");
const Setting = require("../../models/setting.model");
const ForgotPassword = require("../../models/forgotpw.model");
const md5 = require("md5");
const generateHelper = require("../../helpers/generate")
const sendMailHelper = require("../../helpers/sendMail")

const systemConfig = require("../../config/system");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);


module.exports.loginGoogle = async (req, res) => {
  const { token } = req.body;  // Nhận token từ phía client
  
  try {
    // Xác thực token Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,  // Kiểm tra ID client
    });

    const payload = ticket.getPayload();  // Lấy payload từ token
    let user = await User.findOne({ UserEmail: payload.email });  // Dùng email để tìm người dùng

    if (!user) {
      // Nếu người dùng chưa tồn tại, tạo mới
      user = new User({
        UserFullName: payload.name,  // Lưu tên người dùng
        UserEmail: payload.email,  // Lưu email người dùng
        UserAvatar: payload.picture,  // Lưu avatar người dùng
        UserToken: generateHelper.generateRandomString(30),  // Tạo token ngẫu nhiên
      });
      await user.save();  // Lưu người dùng mới vào cơ sở dữ liệu
    }

    // Lưu token vào cookie
    res.cookie("user_token", user.UserToken, {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,  // Cookie tồn tại trong 1 ngày
    });

    // Trả về phản hồi thành công
    res.json({ code: 200, 
      message: "Đăng nhập thành công!", 
      user: user.UserToken,
    });

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Token không hợp lệ" });  // Token không hợp lệ
  }
};


// const Facebook = require('fb');

// // Xử lý đăng nhập Facebook
// module.exports.loginFacebook = async (req, res) => {
//   const { accessToken } = req.body;

//   if (!accessToken) {
//     return res.status(400).json({ message: 'Không có accessToken' });
//   }

//   // Xác thực accessToken với Facebook
//   Facebook.api('me', { fields: 'id,name,email', access_token: accessToken }, async (response) => {
//     if (response.error) {
//       return res.status(400).json({ message: 'Lỗi xác minh token từ Facebook' });
//     }

//     const user = await User.findOne({ UserEmail: response.email });
//     if (!user) {
//       // Nếu người dùng chưa có trong hệ thống, tạo mới người dùng
//       const newUser = new User({
//         UserFullName: response.name,
//         UserEmail: response.email,
//         UserToken: generateRandomString(30),
//       });
//       await newUser.save();
//       return res.json({ message: 'Người dùng đã được tạo', user: newUser });
//     }

//     res.json({ message: 'Đăng nhập thành công', user });
//   });
// };

// // const Facebook = require('fb'); // Bạn cần cài thư viện fb

// // // Xử lý đăng nhập với Facebook
// // module.exports.loginFacebook = async (req, res) => {
// //   const { accessToken } = req.body; // Nhận accessToken từ frontend
  
// //   if (!accessToken) {
// //     return res.json({
// //       code: 400,
// //       message: "Không có accessToken!"
// //     });
// //   }

// //   // Dùng FB SDK để xác minh accessToken
// //   Facebook.api('me', { fields: 'id,name,email', access_token: accessToken }, async function(response) {
// //     if (response.error) {
// //       return res.json({
// //         code: 400,
// //         message: "Lỗi xác minh token từ Facebook"
// //       });
// //     }
    
// //     // Kiểm tra xem người dùng đã tồn tại trong hệ thống chưa
// //     let user = await User.findOne({ UserEmail: response.email });
    
// //     if (!user) {
// //       // Nếu không tồn tại, tạo mới người dùng
// //       user = new User({
// //         UserFullName: response.name,
// //         UserEmail: response.email,
// //         UserPassword: md5(Math.random().toString(36).slice(-8)), // Tạo mật khẩu ngẫu nhiên
// //         UserToken: generateHelper.generateRandomString(30)
// //       });
// //       await user.save();
// //     }

// //     // Gửi token cho người dùng và thông báo đăng nhập thành công
// //     res.cookie("user_token", user.UserToken, { maxAge: 24 * 60 * 60 * 1000 });
// //     res.json({
// //       code: 200,
// //       message: "Đăng nhập Facebook thành công!",
// //       user: user
// //     });
// //   });
// // };

// // [GET] /auth/login
module.exports.login = (req, res) => {
  // if (req.cookies.user_token) {
  //   // console.log(req.cookies.user_token);
  //   // res.redirect(`/`);
  //   res.json({
  //     code: 406,
  //     message: "Người dùng đã đăng nhập"
  //   })
  // } else {
  //   // res.render("client/pages/auth/login", {
  //   //   pageTitle: "Đăng nhập",
  //   // });
  //   res.json({
  //     code: 200,
  //     message: "Kết nối máy chủ thành công"
  //   })
  // }
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

  res.cookie("user_token", user.UserToken, {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000, // Thời gian hết hạn cookie (1 ngày)
  });
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
  req.body.UserToken = generateHelper.generateRandomString(30)
  const user = new User(req.body)
  await user.save();

  res.cookie("user_token", user.UserToken, {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000, // Thời gian hết hạn cookie (1 ngày)
  });
  // req.flash("success", "Đăng ký thành công!");
  // res.redirect(`/`);
  res.json({
    code: 200,
    message: "Đăng ký thành công!"
  })
};

// [POST] /auth/password/forgot
module.exports.passwordForgot = async (req, res) => {
  const UserEmail = req.body.UserEmail

  const user = await User.findOne({
    UserEmail: UserEmail,
    UserDeleted: 1,
    UserStatus: 1,
  })

  if (!user) {
    res.json({
      code: 400,
      message: "Email không tồn tại!!!"
    })
    return;
  }
  //
  const otp = generateHelper.generateRandomNumber(6)
  const objectForgotPw = {
    FPUserEmail: UserEmail,
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
  sendMailHelper.sendMail(UserEmail, Subject, html)

  res.json({
    code: 200,
    message: "Gửi thành công!"
  })
};

// [POST] /auth/password/otp
module.exports.passwordOTP = async (req, res) => {
  const UserEmail = req.body.UserEmail
  const UserOTP = req.body.UserOTP
  console.log(UserEmail, UserOTP)

  const result = await ForgotPassword.findOne({
    FPUserEmail: UserEmail,
    FPOTP: UserOTP
  })
  if (!result) {
    res.json({
      code: 400,
      message: "OTP không hợp lệ!"
    })
  }

  const user = await User.findOne({
    UserEmail: UserEmail
  })
  res.cookie("user_token", user.UserToken)

  res.json({
    code: 200,
    message: "OTP hợp lệ!"
  })
};

// [POST] /auth/password/new
module.exports.passwordNew = async (req, res) => {
  const UserPassword = req.body.UserPassword
  const UserToken = req.cookies.user_token
  await User.updateOne({
    UserToken: UserToken
  }, {
    UserPassword: md5(UserPassword)
  })

  res.json({
    code: 200,
    message: "Đổi mật khẩu thành công!"
  })
};

// [GET] /auth/setting
module.exports.setting = async (req, res) => {
  let setting = await Setting.findOne({}).lean()
  // console.log(setting);
  res.json(setting)
};