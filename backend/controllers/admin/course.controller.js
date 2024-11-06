const Course = require("../../models/course.model")
const paginationHelper = require("../../helpers/pagination")

// [GET] /admin/courses
module.exports.index = async (req, res) => {
  console.log(req.query.status);
  let find = {
    CourseDeleted: 1
  }

  // Bộ lọc
  if (req.query.status=="active") {
    find.CourseStatus = 1;
  } else if (req.query.status=="inactive") {
    find.CourseStatus = 0;
  }

  // Tìm kiếm
  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const regex = new RegExp(keyword, "i");
    find.CourseName = regex;
  }

  // Phân trang
  const countCourses = await Course.countDocuments(find);
  let objectPagination = paginationHelper({
    currentPage: 1,
    limitItems: 5
  },
  req.query,
  countCourses,
)

  const courses = await Course.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip)

  res.render('admin/pages/course/index', {
    pageTitle: "Trang khoá học",
    courses: courses,
    keyword: keyword,
    pagination: objectPagination
  });
}

// [PATCH] /admin/courses/change-status/:status/:CourseID
module.exports.changeStatus = async (req, res) => {
  // console.log(req.params);
  const status = req.params.status;
  const courseID = req.params.CourseID;

  console.log(courseID);

  await Course.updateOne({ _id: courseID}, {CourseStatus: status == "active"?1:0})

  res.redirect('back')
}