const Course = require("../../models/course.model");

// [GET] /search
module.exports.search = async (req, res) => {
  const keyword = req.query.keyword;
  let newCourses = []
  if (keyword) {
    const regex = new RegExp(keyword, "i")
    const courses = await Course.find({
      CourseName: regex,
      CourseDeleted: 1,
      CourseStatus: 1,
    })
    newCourses = courses
  }


  res.render('client/pages/courses/search', {
    pageTitle: "Kết quả tìm kiếm",
    courses: newCourses,
    keyword: keyword,
  });
}