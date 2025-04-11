const Category = require("../../models/category.model")
const Course = require("../../models/course.model")
const Admin = require("../../models/admin.model")
const Role = require("../../models/role.model")
const Setting = require("../../models/setting.model")
const createTreeHelper = require("../../helpers/createTree");

// [GET] /
module.exports.index = async (req, res) => {
  const category = await Category.find({
    CategoryDeleted: 1,
  })
  const allCategory = createTreeHelper.tree(category);

  const courses = await Course.find({
    CourseDeleted: 1,
    CourseStatus: 1
  }).sort({ _id: -1 }).limit(6);
  const role = await Role.findOne({
    RoleName: "Quản trị viên"
  })
  const intructor = await Admin.find({
    AdminDeleted: 1,
    AdminRole_id: role.id
  }).sort({ _id: -1 }).limit(6);
  res.json({
    courses: courses,
    intructor: intructor,
  })
  // res.render('client/pages/home/index', {
  //   pageTitle: "Trang chủ",
  //   allCategory: allCategory,
  //   courses: courses,
  //   intructor: intructor
  // });
}

// [GET] /header
module.exports.header = async (req, res) => {
  const category = await Category.find({
    CategoryDeleted: 1,
  })
  const setting = await Setting.findOne({}).lean()
  if (res.locals.user) {
    setting.user = res.locals.user
  }
  res.json({
    category: category,
    setting: setting,
  })
};