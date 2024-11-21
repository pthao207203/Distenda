const Setting = require("../../models/setting.model")

module.exports.Setting = async (req, res, next) => {
  const setting = await Setting.findOne({})
  res.locals.setting = setting
  next()
}