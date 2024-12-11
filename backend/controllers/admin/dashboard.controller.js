const Course = require("../../models/course.model");
const Category = require("../../models/category.model");
const Admin = require("../../models/admin.model");
const User = require("../../models/user.model");
const Pay = require("../../models/pay.model");

// [GET] /admin/dashboard
module.exports.dashboard = async (req, res) => {
  const courses = await Course.find().limit(4).lean()
  for (const course of courses) {
    const category = await Category.findOne({
      _id: course.CourseCatogory,
    });

    if (category) {
      course.CategoryName = category.CategoryName;
    }
  }

  // Tính thời gian 24 giờ trước
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
  const pay = await Pay.find({
    "createdBy.createdAt": { $gte: twentyFourHoursAgo }
  })
  console.log(pay)
  const totalIncome = pay.reduce((total, item) => {
    return total + item.PayTotal;
  }, 0);
  const totalProfit = pay.reduce((total, item) => {
    return total + (item.PayProfit ? item.PayProfit : 0);
  }, 0);

  // Tính thời gian 48 giờ trước
  const fortyEightHoursAgo = new Date();
  fortyEightHoursAgo.setHours(fortyEightHoursAgo.getHours() - 48);
  const payMonthAgo = await Pay.find({
    "createdBy.createdAt": { $gte: fortyEightHoursAgo, $lte: twentyFourHoursAgo }
  })
  console.log(payMonthAgo)
  const totalIncomeAgo = payMonthAgo.reduce((total, item) => {
    return total + item.PayTotal;
  }, 0);
  const totalProfitAgo = payMonthAgo.reduce((total, item) => {
    return total + (item.PayProfit ? item.PayProfit : 0);
  }, 0);

  const dashboard = {}
  dashboard.courses = courses
  dashboard.totalIncome = totalIncome
  dashboard.totalProfit = totalProfit
  dashboard.totalIncomeAgo = totalIncomeAgo
  dashboard.totalProfitAgo = totalProfitAgo
  res.json(dashboard)
  // res.render('admin/pages/dashboard/index', {
  //   pageTitle: "Trang dashboard",
  //   statistic: statistic
  // });
}