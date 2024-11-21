const Course = require("../../models/course.model");
const Category = require("../../models/category.model");
const Admin = require("../../models/admin.model");
const User = require("../../models/user.model");

// [GET] /admin/dashboard
module.exports.dashboard = async (req, res) => {
  const statistic = {
    category: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    courses: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    admin: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    user: {
      total: 0,
      active: 0,
      inactive: 0,
    }
  }
  statistic.category.total = await Category.countDocuments({ CategoryDeleted: 1 })
  statistic.category.active = await Category.countDocuments({ CategoryDeleted: 1, CategoryStatus: 1 })
  statistic.category.active = await Category.countDocuments({ CategoryDeleted: 1, CategoryStatus: 0 })

  statistic.courses.total = await Course.countDocuments({ CourseDeleted: 1 })
  statistic.courses.active = await Course.countDocuments({ CourseDeleted: 1, CourseStatus: 1 })
  statistic.courses.active = await Course.countDocuments({ CourseDeleted: 1, CourseStatus: 0 })

  statistic.admin.total = await Admin.countDocuments({ AdminDeleted: 1 })
  statistic.admin.active = await Admin.countDocuments({ AdminDeleted: 1, AdminStatus: 1 })
  statistic.admin.active = await Admin.countDocuments({ AdminDeleted: 1, AdminStatus: 0 })

  statistic.user.total = await User.countDocuments({ UserDeleted: 1 })
  statistic.user.active = await User.countDocuments({ UserDeleted: 1, UserStatus: 1 })
  statistic.user.active = await User.countDocuments({ UserDeleted: 1, UserStatus: 0 })

  res.render('admin/pages/dashboard/index', {
    pageTitle: "Trang dashboard",
    statistic: statistic
  });
}