const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const videoSchema = new mongoose.Schema({
  LessonId: String,
  VideoName: String,
  VideoSlug: {
    type: String,
    slug: "VideoName",
    unique: true,
  },
  VideoDescription: String,
  VideoPosition: Number,
  VideoUrl: String,
  VideoDeleted: {
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

const Video = mongoose.model("Video", videoSchema, "Video");

module.exports = Video;
