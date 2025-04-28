const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const courseSchema = new mongoose.Schema({
  CourseIntructor: String,
  CourseName: String,
  CourseSlug: {
    type: String,
    slug: "CourseName",
    unique: true,
  },
  CourseCatogory: {
    type: String,
    default: "",
  },
  CourseDescription: String,
  CourseOverview: String,
  CourseLearning: String,
  CourseRequire: String,
  CourseLanguage: String,
  CourseDuration: {
    type: Number,
    default: 0,
  },
  CoursePrice: Number,
  CourseSalary: Number,
  CourseProfit: Number,
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
  CourseReview: [{
    UserId: String,
    Rate: Number,
    Comment: String,
  }],
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

const Course = mongoose.model("Course", courseSchema, "Course");

module.exports = Course;
