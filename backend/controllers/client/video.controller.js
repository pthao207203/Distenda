const Video = require("../../models/video.model");
const Exercise = require("../../models/exercise.model");
const Lesson = require("../../models/lesson.model");
const Course = require("../../models/course.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// [GET] /video/detail/:VideoSlug
module.exports.detailItem = async (req, res) => {
  try {
    const find = {
      VideoDeleted: 1,
      VideoSlug: req.params.VideoSlug,
    };

    const video = await Video.findOne(find).lean();

    const lesson = await Lesson.findOne({
      _id: video.LessonId,
      LessonDeleted: 1,
    });

    const course = await Course.findOne({
      _id: lesson.CourseId,
      CourseDeleted: 1,
      CourseStatus: 1
    }).lean();
    const count = await Lesson.countDocuments({
      CourseId: course._id,
      LessonDeleted: 1,
    });
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
        const exer = await Exercise.findOne({
          LessonId: item._id,
          ExerciseDeleted: 1
        })
        if (exer) {
          item.exercise = exer
        }

      }
      course.lesson = lesson;
      // console.log(lesson)
    }
    video.course = course;


    // const count = await Lesson.countDocuments({
    //   CourseId: req.params.CourseID,
    // });
    // if (count > 0) {
    //   const lesson = await Lesson.find({
    //     CourseId: req.params.CourseID,
    //     LessonDeleted: 1,
    //   });
    //   course.lesson = lesson;
    // }

    res.json(video)
    // res.render("admin/pages/video/detail", {
    //   pageTitle: video.VideoName,
    //   video: video,
    // });
  } catch (error) {
    // req.flash("error", "Không tìm thấy sản phẩm!");
    console.log(error)
    // res.redirect(`/courses`);
    res.json({
      code: 400,
      message: error
    })
  }
};
