const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const courseSchema = new mongoose.Schema({
  CourseIntructor: String,
  CourseName: String,
  CourseSlug: {
    type: String,
    slug: "CourseName",
    unique: true
  },
  CourseDescription: String,
  CourseDuration: {
    type: Number,
    default: 0,
  },
  CoursePrice: Number,
  CourseDiscount: Number,
  CoursePicture: String,
  CourseBought: {
    type: Number,
    default: 0,
  },
  CourseStatus: Number,
  CourseDeleted: {
    type: Number,
    default: 1,
  },
  deletedAt: Date,
}, {timestamps: true});

const Course = mongoose.model('Course', courseSchema, "Course");

module.exports = Course;