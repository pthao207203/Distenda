const Course = require("../../models/course.model");
const Category = require("../../models/category.model")
const Admin = require("../../models/admin.model")
const Lesson = require("../../models/lesson.model")
const Video = require("../../models/video.model")
const createTreeHelper = require("../../helpers/createTree");


// [GET] /courses
module.exports.index = async (req, res) => {
  const courses = await Course.find({
    CourseDeleted: 1,
    CourseStatus: 1
  });

  const category = await Category.find({
    CategoryDeleted: 1,
  })
  const newCategory = createTreeHelper.tree(category);

  //console.log(courses);

  res.render('client/pages/courses/index', {
    pageTitle: "Danh sách khoá học",
    courses: courses,
    allCategory: newCategory,
  })
}

// [GET] /courses/:CourseSlug
module.exports.detail = async (req, res) => {
  try {
    const category = await Category.find({
      CategoryDeleted: 1,
    })
    const allCategory = createTreeHelper.tree(category);
    
    const find = {
      CourseDeleted: 1,
      CourseSlug: req.params.CourseSlug,
      CourseStatus: 1
    }
    const course = await Course.findOne(find);

    if (course.CourseIntructor && course.CourseIntructor != "") {
      const intructor = await Admin.findOne({
        AdminDeleted: 1,
        _id: course.CourseIntructor,
      });
      course.intructor = intructor;
    }
    console.log(course.id)
    const count = await Lesson.countDocuments({
      CourseId: course.id,
      LessonDeleted: 1,
    });
    if (count > 0) {
      const lesson = await Lesson.find({
        CourseId: course.id,
        LessonDeleted: 1,
      });
      for(const item of lesson){
        const video = await Video.find({
          LessonId: item.id,
          VideoDeleted: 1
        })
        if(video.length != 0) {
          item.video = video
          console.log(item.video)
          console.log("OK")
        }
        
      }
      course.lesson = lesson;
    }
    res.render('client/pages/courses/detail', {
      pageTitle: course.CourseName,
      course: course,
      allCategory: allCategory,
    });
  } catch (error){
    req.flash("error", "Không tìm thấy sản phẩm!")
    res.redirect(`/courses`)
  }
}