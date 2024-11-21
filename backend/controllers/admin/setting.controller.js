const Admin = require("../../models/admin.model");
const Setting = require("../../models/setting.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// [GET] /admin/setting/general
module.exports.general = async (req, res) => {
  const setting = await Setting.findOne({})
  res.render("admin/pages/setting/general", {
    pageTitle: "Cài đặt chung",
    setting: setting,
  });
};

// [PATCH] /admin/setting/general
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

  res.redirect("back")
};
