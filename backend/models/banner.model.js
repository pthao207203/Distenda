const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const bannerSchema = new mongoose.Schema({
  BannerName: String,
  BannerCourse: String,
  BannerDescription: String,
  BannerPicture: String,
  BannerStatus: {
    type: Number,
    default: 1,
  },
  BannerDeleted: {
    type: Number,
    default: 1,
  },
  createdBy: {
    UserId: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  editedBy: [
    {
      UserId: String,
      editedAt: Date,
    },
  ],
  deletedBy: {
    UserId: String,
    deletedAt: Date,
  },
});

const Banner = mongoose.model("Banner", bannerSchema, "Banner");

module.exports = Banner;
