const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const exerciseSchema = new mongoose.Schema({
  LessonId: String,
  ExerciseName: String,
  ExerciseSlug: {
    type: String,
    slug: ["ExerciseName", "LessonId"],
    unique: true,
  },
  ExerciseQuestion: String,
  ExerciseSample: String,
  ExerciseAnswer: String,
  ExerciseTestcase: [
    {
      Input: String,
      Output: String,
    },
  ],
  ExerciseDeleted: {
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

const Exercise = mongoose.model("Exercise", exerciseSchema, "Exercise");

module.exports = Exercise;
