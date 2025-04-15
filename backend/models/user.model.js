const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserFullName: String,
  UserEmail: String,
  UserPassword: String,
  UserToken: String,
  UserPhone: String,
  UserAvatar: String,
  UserStatus: {
    type: Number,
    default: 1,
  },
  UserMoney: {
    type: Number,
    default: 0,
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
