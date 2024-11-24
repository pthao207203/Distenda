const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    WebsiteName: String,
    WebsiteLogoAdmin: String,
    WebsiteLogoUser: String,
    WebsiteIcon: String,
    WebsitePhone: String,
    WebsiteEmail: String,
    WebsiteFacebook: String,
    WebsiteTiktok: String,
    WebsiteCopyright: String,
    editedBy: [
      {
        UserId: String,
        editedAt: Date,
      },
    ],
  }
);

const Setting = mongoose.model("Setting", settingSchema, "Setting");

module.exports = Setting;