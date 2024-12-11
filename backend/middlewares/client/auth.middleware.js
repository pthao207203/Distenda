const systemConfig = require("../../config/system");
const User = require("../../models/user.model");

module.exports.requireAuth = async (req, res, next) => {
  if (!req.cookies.user_token) {
    res.redirect(`/auth/login`);
    return;
  }
  const user = await User.findOne({
    UserToken: req.cookies.user_token,
    UserDeleted: 1,
    UserStatus: 1,
  }).select("-UserPassword");

  if (!user) {
    res.clearCookie("user_token");
    res.redirect(`/auth/login`);
    return;
  }

  next();
};

module.exports.auth = async (req, res, next) => {

  const user = await User.findOne({
    UserToken: req.cookies.user_token,
    UserDeleted: 1,
    UserStatus: 1,
  }).select("-UserPassword");

  if (user) {
    res.locals.user = user;
  }

  next();
};