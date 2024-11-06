// [GET] /courses
const Course = require("../../models/course.model");

module.exports.index = async (req, res) => {
  const courses = await Course.find({});

  //console.log(courses);

  res.render('client/pages/courses/index', {
    pageTitle: "Danh sách khoá học",
    courses: courses,
  })
}