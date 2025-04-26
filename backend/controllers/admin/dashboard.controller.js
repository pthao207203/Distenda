const mongoose = require("mongoose");
const Course = require("../../models/course.model");
const Category = require("../../models/category.model");
const Admin = require("../../models/admin.model");
const User = require("../../models/user.model");
const Role = require("../../models/role.model");
const Pay = require("../../models/pay.model");
const Setting = require("../../models/setting.model")

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

  const now = new Date();

  // Tạo ngày bắt đầu là 12 tháng trước và tháng kết thúc là tháng hiện tại
  const startOfLastYear = new Date(now);
  startOfLastYear.setMonth(now.getMonth() - 11);  // 12 tháng trước từ hiện tại

  // Mảng tháng từ 12 tháng trước đến tháng hiện tại
  const months = [];
  for (let i = 0; i < 12; i++) {
    let month = (startOfLastYear.getMonth() + i) % 12; // Tính toán tháng tiếp theo
    let year = now.getFullYear();
    if (month >= startOfLastYear.getMonth()) {
      year--; // Nếu tháng tính lớn hơn, giảm năm
    }
    months.push(`Tháng ${month + 1} (${year})`); // Thêm tháng vào mảng
  }

  // Sử dụng aggregate để lấy dữ liệu từ 12 tháng trước đến tháng hiện tại
  const result = await Pay.aggregate([
    {
      $match: {
        "createdBy.createdAt": { $gte: startOfLastYear, $lt: now },  // Lọc theo khoảng thời gian từ 12 tháng trước đến tháng hiện tại
         PayStatus: { $ne: 0 },  // Chỉ lấy các hóa đơn chưa bị hủy (PayStatus != 1)
      }
    },
    {
      $project: {
        month: { $month: "$createdBy.createdAt" },  // Lấy tháng từ createdAt
        year: { $year: "$createdBy.createdAt" },   // Lấy năm từ createdAt
        PayTotal: 1,  
        PayProfit: 1,  // Lấy các trường cần thiết
      },
    },
    {
      $group: {
        _id: { month: "$month", year: "$year" },  // Nhóm theo tháng và năm
        totalProfit: { $sum: "$PayProfit" },  // Tính tổng doanh thu của mỗi tháng
        totalIncome: { $sum: "$PayTotal" },  // Tính tổng lợi nhuận của mỗi tháng
      },
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 },  // Sắp xếp theo năm và tháng
    },
  ]);

  // Mảng lợi nhuận cho các tháng từ tháng 12 năm ngoái đến tháng hiện tại
  let profitData = new Array(12).fill(0);  // Khởi tạo mảng doanh thu với giá trị 0 cho mỗi tháng
  let incomeData = new Array(12).fill(0);  // Khởi tạo mảng lợi nhuận với giá trị 0 cho mỗi tháng

  // Điền dữ liệu vào mảng profitData (tính lợi nhuận theo tháng)
  result.forEach(item => {
    const monthIndex = months.findIndex(month => month.includes(`Tháng ${item._id.month} (${item._id.year})`)); // Tìm tháng và năm trong mảng months
    if (monthIndex !== -1) {
      profitData[monthIndex] = item.totalProfit;  // Gán tổng doanh thu vào tháng tương ứng
      incomeData[monthIndex] = item.totalIncome;  // Gán tổng lợi nhuận vào tháng tương ứng
    }

  });


  const priceRanges = [
    { label: "Dưới 500k", min: 0, max: 499999 },
    { label: "500k - 1 triệu", min: 500000, max: 999999 },
    { label: "1 triệu - 1.5 triệu", min: 1000000, max: 1499999 },
    { label: "1.5 triệu - 2 triệu", min: 1500000, max: 2000000 },
  ];

  // Lấy toàn bộ giao dịch
  const pays = await Pay.find({ PayStatus: 1 }).lean(); // Nếu cần chỉ lấy giao dịch thành công

  // Khởi tạo bộ đếm cho từng phân khúc
  const rangeCounts = priceRanges.map(() => 0);

  // Lặp qua từng giao dịch và phân loại vào nhóm phù hợp
  pays.forEach(pay => {
    const total = pay.PayTotal;
    for (let i = 0; i < priceRanges.length; i++) {
      const range = priceRanges[i];
      if (total >= range.min && total <= range.max) {
        rangeCounts[i]++;
        break;
      }
    }
  });

  // Chuẩn bị dữ liệu cho biểu đồ polar
  const polarLabels = priceRanges.map(r => r.label); // ['Dưới 500k', ..., '1.5 triệu - 2 triệu']
  const polarData = rangeCounts;                     // [số lượng học viên trong từng nhóm]


  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);  // Ngày đầu tháng hiện tại
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);  // Ngày đầu tháng sau
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const startOfCurrentMonthPrev = new Date(now.getFullYear(), now.getMonth(), 0); // Lấy ngày cuối tháng trước

  // Tính tổng số hóa đơn tháng hiện tại
  const totalOrders = await Pay.countDocuments({
    "PayStatus": 1,  // Chỉ tính các hóa đơn đã thanh toán
    "createdBy.createdAt": { $gte: startOfCurrentMonth, $lt: startOfNextMonth }  // Lọc theo tháng hiện tại
  });

  // Tính tổng số hóa đơn tháng trước
  const totalOrdersAgo = await Pay.countDocuments({
    "PayStatus": 1,  // Chỉ tính các hóa đơn đã thanh toán
    "createdBy.createdAt": { $gte: startOfLastMonth, $lt: startOfCurrentMonth }  // Lọc theo tháng trước
  });

  const totalStudentsAgo = await User.countDocuments({
    "UserStatus": 1,  // Chỉ tính những học viên đang hoạt động
    // "UserDeleted": 0,  // Không bị xóa
    "createdAt": { $gte: startOfLastMonth, $lt: startOfCurrentMonthPrev }  // Lọc theo tháng trước
  });

  const totalStudents = await User.countDocuments({
    "UserStatus": 1,  // Chỉ tính những học viên đang hoạt động
    // "UserDeleted": 0,  // Không bị xóa
    "createdAt": { $gte: startOfCurrentMonth, $lt: startOfNextMonth }  // Lọc theo tháng hiện tại
  });

  // Tính tổng doanh thu tháng hiện tại
  const totalIncome = await Pay.aggregate([
    {
      $match: {
        PayStatus: 1, // Chỉ tính các hóa đơn đã thanh toán
        "createdBy.createdAt": { $gte: startOfCurrentMonth, $lt: startOfNextMonth }, // Lọc theo tháng hiện tại
      },
    },
    {
      $group: {
        _id: null,
        totalIncome: { $sum: "$PayTotal" }, // Tính tổng doanh thu
      },
    },
  ]);

  const currentTotalIncome = totalIncome[0]?.totalIncome || 0; // Nếu không có dữ liệu thì gán là 0

  // Tính tổng doanh thu tháng trước
  const totalIncomeAgo = await Pay.aggregate([
    {
      $match: {
        PayStatus: 1, // Chỉ tính các hóa đơn đã thanh toán
        "createdBy.createdAt": { $gte: startOfLastMonth, $lt: startOfCurrentMonthPrev }, // Lọc theo tháng trước
      },
    },
    {
      $group: {
        _id: null,
        totalIncome: { $sum: "$PayTotal" }, // Tính tổng doanh thu
      },
    },
  ]);

  const previousTotalIncome = totalIncomeAgo[0]?.totalIncome || 0; // Nếu không có dữ liệu thì gán là 0

  // Tính tổng lợi nhuận tháng hiện tại
  const totalProfit = await Pay.aggregate([
    {
      $match: {
        PayStatus: 1, // Chỉ tính các hóa đơn đã thanh toán
        "createdBy.createdAt": { $gte: startOfCurrentMonth, $lt: startOfNextMonth }, // Lọc theo tháng hiện tại
      },
    },
    {
      $group: {
        _id: null,
        totalProfit: { $sum: "$PayProfit" }, // Tính tổng lợi nhuận
      },
    },
  ]);

  const currentTotalProfit = totalProfit[0]?.totalProfit || 0; // Nếu không có dữ liệu thì gán là 0

  // Tính tổng lợi nhuận tháng trước
  const totalProfitAgo = await Pay.aggregate([
    {
      $match: {
        PayStatus: 1, // Chỉ tính các hóa đơn đã thanh toán
        "createdBy.createdAt": { $gte: startOfLastMonth, $lt: startOfCurrentMonthPrev }, // Lọc theo tháng trước
      },
    },
    {
      $group: {
        _id: null,
        totalProfit: { $sum: "$PayProfit" }, // Tính tổng lợi nhuận
      },
    },
  ]);

  const previousTotalProfit = totalProfitAgo[0]?.totalProfit || 0; // Nếu không có dữ liệu thì gán là 0


  const dashboard = {}
  dashboard.courses = courses
  dashboard.totalIncome = currentTotalIncome
  dashboard.totalProfit = currentTotalProfit
  dashboard.totalIncomeAgo = previousTotalIncome
  dashboard.totalProfitAgo = previousTotalProfit
  dashboard.profitData = profitData
  dashboard.incomeData = incomeData
  dashboard.monthLabels = months
  dashboard.labels = polarLabels
  dashboard.data = polarData
  dashboard.totalStudents = totalStudents
  dashboard.totalStudentsAgo = totalStudentsAgo
  dashboard.totalOrders = totalOrders
  dashboard.totalOrdersAgo = totalOrdersAgo


  res.json(dashboard)
  // res.render('admin/pages/dashboard/index', {
  //   pageTitle: "Trang dashboard",
  //   statistic: statistic
  // });
}

// [GET] /admin/dashboard/header
module.exports.header = async (req, res) => {
  const setting = await Setting.findOne({}).lean()
  setting.user = res.locals.user

  if (mongoose.Types.ObjectId.isValid(setting.user.AdminRole_id)) {
    const role = await Role.findOne({
      _id: setting.user.AdminRole_id,
      RoleDeleted: 1, // Đảm bảo chỉ lấy role chưa bị xóa
    }).lean();

    setting.role = role ? role : null;
  } else {
    setting.role = null;
  }

  res.json({
    setting: setting,
    role: setting.role,
  })
};

// [GET] /admin/dashboard/role
module.exports.role = async (req, res) => {
  const role = res.locals.role
  // console.log(role)
  res.json({
    role: role,
  })
};