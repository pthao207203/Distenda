const Admin = require("../../models/admin.model");
const Setting = require("../../models/setting.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// [GET] /admin/setting/general
module.exports.general = async (req, res) => {
  const setting = await Setting.findOne({}).lean()
  res.json(setting)
  // res.render("admin/pages/setting/general", {
  //   pageTitle: "Cài đặt chung",
  //   setting: setting,
  // });
};

// [POST] /admin/setting/general
module.exports.generalPatch = async (req, res) => {
  const setting = await Setting.findOne({})
  if (setting) {
    await Setting.updateOne({
      _id: setting.id
    }, req.body);
  } else {
    const record = new Setting(req.body);
    await record.save();
  }
  res.json({
    code: 200,
    message: "Cập nhật thành công!"
  })
  // res.redirect("back")
};
