const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  CourseInstructor: String,
  CourseName: String,
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
}, {timestamps: true});

const Course = mongoose.model('Course', courseSchema, "Course");

module.exports = Course;