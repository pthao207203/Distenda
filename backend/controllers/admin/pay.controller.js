const User = require("../../models/user.model");
const Course = require("../../models/course.model");
const Pay = require("../../models/pay.model");
const Admin = require("../../models/admin.model");
const Category = require("../../models/category.model");

// // [GET] /admin/pay/
module.exports.pay = async (req, res) => {
  const pays = await Pay.find().lean().sort({ "createdBy.createdAt": -1 });
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
//     console.log("🔹 Bắt đầu cập nhật dữ liệu Pay...");

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
    

//     console.log("✅ Cập nhật xong!");

//     res.send("✅ Đã cập nhật lại toàn bộ PayTeacher và PayProfit thành công!");
//   } catch (err) {
//     console.error("❌ Lỗi:", err);
//     res.status(500).send("❌ Lỗi khi cập nhật dữ liệu!");
//   }
// };

