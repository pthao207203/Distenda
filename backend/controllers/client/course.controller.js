const Course = require("../../models/course.model");
const Category = require("../../models/category.model")
const Admin = require("../../models/admin.model")
const Lesson = require("../../models/lesson.model")
const Video = require("../../models/video.model")
const Exercise = require("../../models/exercise.model")
const User = require("../../models/user.model")
const createTreeHelper = require("../../helpers/createTree");


// [GET] /courses
module.exports.index = async (req, res) => {
  const courses = await Course.find({
    CourseDeleted: 1,
    CourseStatus: 1
  }).lean();

  for (const course of courses) {
    const intructor = await Admin.findOne({ _id: course.CourseIntructor });
    console.log(intructor)
    course.intructor = intructor
  }

  res.json(courses)
  // res.render('client/pages/courses/index', {
  //   pageTitle: "Danh sách khoá học",
  //   courses: courses,
  //   allCategory: newCategory,
  // })
}

// [GET] /courses/detail/:CourseSlug
module.exports.detail = async (req, res) => {
  try {
    const find = {
      CourseDeleted: 1,
      CourseSlug: req.params.CourseSlug,
      CourseStatus: 1
    }
    let course = {}
    course = await Course.findOne(find).lean();
    // console.log(course)

    if (course.CourseIntructor && course.CourseIntructor != "") {
      const intructor = await Admin.findOne({
        AdminDeleted: 1,
        _id: course.CourseIntructor,
      });
      course.intructor = intructor;
    }

    const count = await Lesson.countDocuments({
      CourseId: course._id,
      LessonDeleted: 1,
    });
    // console.log("count", count)
    if (count > 0) {
      const lesson = await Lesson.find({
        CourseId: course._id,
        LessonDeleted: 1,
      }).lean();
      for (const item of lesson) {
        const video = await Video.find({
          LessonId: item._id,
          VideoDeleted: 1
        })
        if (video.length != 0) {
          item.video = video
        }

      }
      for (const item of lesson) {
        const exer = await Exercise.find({
          LessonId: item._id,
          ExerciseDeleted: 1
        })
        if (exer.length != 0) {
          item.exercise = exer
        }

      }
      course.lesson = lesson;
      // console.log(lesson)
    }
    if (course.CourseReview) {
      for (const item of course.CourseReview) {
        const user = await User.findOne({
          _id: item.UserId,
        })
        if (user) {
          item.user = user
        }
      }
      // console.log(lesson)
    }

    if (res.locals.user) {
      const test = await User.findOne({
        _id: res.locals.user._id,
        "UserCourse.CourseId": course._id
      })
      if (test) {
        console.log(test)
        course.has = 1;
        const test1 = await User.findOne({
          _id: res.locals.user._id,
          "UserCourse.CourseId": course._id,
          "UserCourse.CourseReview": 0,
        })
        if (test1) {
          course.review = 0;
        }
      }
    }
    course.user =
      res.json(course)
    // res.render('client/pages/courses/detail', {
    //   pageTitle: course.CourseName,
    //   course: course,
    // });
  } catch (error) {
    req.flash("error", "Không tìm thấy sản phẩm!")
    res.redirect(`/courses`)
  }
}

