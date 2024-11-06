const Course = require("../../models/course.model")
const paginationHelper = require("../../helpers/pagination")
const systemConfig = require("../../config/system");

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

  req.flash('success', 'Cập nhật trạng thái thành công');

  res.redirect('back')
}

// [DELETE] /admin/courses/delete/:CourseID
module.exports.deleteItem = async (req, res) => {
  // console.log(req.params);
  const courseID = req.params.CourseID;

  console.log(courseID);

  await Course.updateOne({ _id: courseID}, {CourseDeleted: 0})

  res.redirect('back')
}

// [GET] /admin/courses/create
module.exports.createItem = async (req, res) => {
  res.render('admin/pages/course/create', {
    pageTitle: "Thêm khoá học"
  });
}

// [POST] /admin/courses/create
module.exports.createPost = async (req, res) => {
  req.body.price = parseInt(req.body.price);
  req.body.discountPercentage = parseInt(req.body.discountPercentage);
  req.body.status = req.body.status == "active"?1:0;



  const course = new Course({
    CourseInstructor: req.body.intructor,
    CourseName: req.body.name,
    CourseDescription: req.body.description,
    CourseDuration: 0,
    CoursePrice: req.body.price,
    CourseDiscount: req.body.discountPercentage,
    CoursePicture: req.body.thumbnail,
    CourseBought: 0,
    CourseStatus: req.body.status,
    CourseDeleted: 1
  });
  console.log(course);
  await course.save();

  res.redirect(`${systemConfig.prefixAdmin}/courses`)
}