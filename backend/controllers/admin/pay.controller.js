const User = require("../../models/user.model");
const Course = require("../../models/course.model");
const Pay = require("../../models/pay.model");
const Admin = require("../../models/admin.model");
const Category = require("../../models/category.model");

const axios = require('axios');
const crypto = require('crypto');
const momoConfig = require("../../config/momo.config");

// [POST] /pay/:CourseSlug/momo
module.exports.payMoMo = async (req, res) => {
  if (!req.cookies.user_token) {
    return res.json({
      code: 401,
      message: "Bạn chưa đăng nhập!"
    });
  }

  const course = await Course.findOne({
    CourseSlug: req.params.CourseSlug
  });
  if (!course) {
    return res.json({
      code: 404,
      message: "Không tìm thấy khóa học!"
    });
  }

  const amount = course.CoursePrice * (100 - course.CourseDiscount) / 100;
  const orderId = momoConfig.partnerCode + new Date().getTime();
  const requestId = orderId;

  const rawSignature =
    `accessKey=${momoConfig.accessKey}&amount=${amount}&extraData=${momoConfig.extraData}&ipnUrl=${momoConfig.ipnUrl}&orderId=${orderId}&orderInfo=Thanh toán khoá học ${course.CourseName}&partnerCode=${momoConfig.partnerCode}&redirectUrl=${momoConfig.redirectUrl}&requestId=${requestId}&requestType=${momoConfig.requestType}`;

  const signature = crypto.createHmac('sha256', momoConfig.secretKey).update(rawSignature).digest('hex');

  const requestBody = {
    partnerCode: momoConfig.partnerCode,
    partnerName: 'Distenda',
    storeId: 'DistendaStore',
    requestId,
    amount: `${amount}`,
    orderId,
    orderInfo: `Thanh toán khoá học ${course.CourseName}`,
    redirectUrl: momoConfig.redirectUrl,
    ipnUrl: momoConfig.ipnUrl,
    lang: momoConfig.lang,
    requestType: momoConfig.requestType,
    autoCapture: momoConfig.autoCapture,
    extraData: momoConfig.extraData,
    signature
  };

  try {
    const response = await axios.post('https://test-payment.momo.vn/v2/gateway/api/create', requestBody, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Lưu đơn hàng vào DB kèm response MoMo
    const pay = new Pay({
      UserId: res.locals.user.id,
      CourseId: course._id,
      PayTotal: amount,
      orderId: orderId,
      PayStatus: 0, // Đơn hàng khởi tạo, chờ thanh toán
      PayResponse: response.data, // Lưu toàn bộ JSON response từ MoMo
      createdBy: {
        UserId: res.locals.user.id
      }
    });
    await pay.save();

    return res.json({
      code: 200,
      payUrl: response.data.payUrl
    });
  } catch (err) {
    return res.json({
      code: 500,
      message: "Lỗi khi kết nối MoMo",
      error: err.message
    });
  }
};

// Dummy Callback để MoMo gọi 
module.exports.handleCallback = async (req, res) => {
  res.status(200).send('OK');
};

// // [GET] /admin/pay/
module.exports.pay = async (req, res) => {
  const pays = await Pay.find().lean().sort({
    "createdBy.createdAt": -1
  });
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

// // [POST] /admin/pay/detail/:PayID
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

// module.exports.fixPayData = async (req, res) => {
//   try {
//     console.log(" Bắt đầu cập nhật dữ liệu Pay...");

//     await Pay.aggregate([
//       {
//         $lookup: {
//           from: "Course",
//           let: { courseIdStr: "$CourseId" },
//           pipeline: [
//             {
//               $match: {
//                 $expr: { $eq: [ { $toString: "$_id" }, "$$courseIdStr" ] }
//               }
//             }
//           ],
//           as: "courseInfo"
//         }
//       },
//       { $unwind: "$courseInfo" },
//       {
//         $set: {
//           PayTeacher: {
//             $round: [
//               { $multiply: ["$PayTotal", { $divide: ["$courseInfo.CourseSalary", 100] }] },
//               0
//             ]
//           },
//           PayProfit: {
//             $subtract: [
//               "$PayTotal",
//               { $round: [
//                   { $multiply: ["$PayTotal", { $divide: ["$courseInfo.CourseSalary", 100] }] },
//                   0
//               ]}
//             ]
//           }
//         }
//       },
//       {
//         $merge: {
//           into: "Pay",
//           whenMatched: "merge",
//           whenNotMatched: "discard"
//         }
//       }
//     ]);


//     console.log("Cập nhật xong!");

//     res.send("Đã cập nhật lại toàn bộ PayTeacher và PayProfit thành công!");
//   } catch (err) {
//     console.error("Lỗi:", err);
//     res.status(500).send("Lỗi khi cập nhật dữ liệu!");
//   }
// };
