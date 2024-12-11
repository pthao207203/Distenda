const User = require("../../models/user.model");
const Course = require("../../models/course.model");
const Pay = require("../../models/pay.model");
const Admin = require("../../models/admin.model");
const Category = require("../../models/category.model");

// // [GET] /pay/
module.exports.pay = async (req, res) => {
  const pays = await Pay.find().lean()
  for (const pay of pays) {
    const user = await User.findOne({
      _id: pay.UserId,
    });
    if (user) {
      pay.user = user.UserFullName;
    }

    const course = await Course.findOne({
      _id: pay.CourseId,
    });
    console.log(course)
    if (course) {
      pay.course = course.CourseName;
    }
  }
  res.json(pays)
};

// // [POST] /pay/detail/:PayID
module.exports.payDetail = async (req, res) => {
  const pay = await Pay.findOne({
    _id: req.params.PayID
  }).lean()
  const user = await User.findOne({
    _id: pay.UserId,
  });
  if (user) {
    pay.user = user.UserFullName;
  }

  const course = await Course.findOne({
    _id: pay.CourseId,
  }).lean();
  console.log(course)
  if (course) {
    pay.course = course;
  }
  const category = await Category.findOne({
    _id: course.CourseCatogory,
  });

  if (category) {
    pay.course.CategoryName = category.CategoryName;
  }
  res.json(pay)
};