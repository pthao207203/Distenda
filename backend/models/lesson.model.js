const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const lessonSchema = new mongoose.Schema({
  CourseId: String,
  LessonName: String,
  LessonSlug: {
    type: String,
    slug: "LessonName",
    unique: true,
  },
  LessonDescription: String,
  LessonPosition: Number,
  LessonDeleted: {
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

const Lesson = mongoose.model("Lesson", lessonSchema, "Lesson");

module.exports = Lesson;
