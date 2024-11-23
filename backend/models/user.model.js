const mongoose = require("mongoose");
const generateHelper = require("../helpers/generate")

const userSchema = new mongoose.Schema({
  UserFullName: String,
  UserEmail: String,
  UserPassword: String,
  UserToken: {
    type: String,
    default: generateHelper.generateRandomString(30)
  },
  UserPhone: String,
  UserAvatar: String,
  UserStatus: {
    type: Number,
    default: 1,
  },
  UserDeleted: {
    type: Number,
    default: 1,
  },
  UserLikes: {
    type: Array,
    default: [],
  },
  UserCourse: [
    {
      _id: false,
      CourseId: String,
      CourseReview: {
        type: Number,
        default: 0,
      },
      CourseCerficate: String,
      CourseStatus: {
        type: Number,
        default: 0,
      },
      CourseProcess: [
        {
          _id: false,
          LessonId: String,
          LessonStatus: {
            type: Number,
            default: 0,
          },
          LessonProcess: {
            type: Array,
            default: [],
          },
        }
      ],
      CourseDayAt: {
        type: Date,
        default: Date.now,
      },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
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

userSchema.path('UserCourse').schema.options = { _id: false };
userSchema.path('UserCourse.CourseProcess').schema.options = { _id: false };

const User = mongoose.model("User", userSchema, "User");

module.exports = User;
