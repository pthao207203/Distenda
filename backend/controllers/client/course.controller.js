// [GET] /courses
const Course = require("../../models/course.model");

module.exports.index = async (req, res) => {
  const courses = await Course.find({
    CourseDeleted: 1,
    CourseStatus: 1
  });

  //console.log(courses);

  res.render('client/pages/courses/index', {
    pageTitle: "Danh sách khoá học",
    courses: courses,
  })
}

// [GET] /courses/:CourseSlug
module.exports.detail = async (req, res) => {
  try {
    const find = {
      CourseDeleted: 1,
      CourseSlug: req.params.CourseSlug,
      CourseStatus: 1
    }

    const course = await Course.findOne(find);

    res.render('client/pages/courses/detail', {
      pageTitle: course.CourseName,
      course: course,
    });
  } catch (error){
    req.flash("error", "Không tìm thấy sản phẩm!")
    res.redirect(`/courses`)
  }
}