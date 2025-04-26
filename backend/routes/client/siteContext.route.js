const express = require("express");
const router = express.Router();

const Course = require("../../models/course.model");
const Lesson = require("../../models/lesson.model");
const Voucher = require("../../models/voucher.model");
const Exercise = require("../../models/exercise.model");
const Pay = require("../../models/pay.model");
const Video = require("../../models/video.model");
const ForgotPassword = require("../../models/forgotpw.model");
const Category = require("../../models/category.model");

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({ CourseDeleted: 1 })
      .limit(5)
      .select("CourseName CoursePrice");
    const lessons = await Lesson.find({ LessonDeleted: 1 })
      .limit(5)
      .select("LessonName");
    const vouchers = await Voucher.find({
      VoucherDeleted: 1,
      status: 1,
    }).select("voucherCode discountPercentage");
    const exercises = await Exercise.find({ ExerciseDeleted: 1 })
      .limit(5)
      .select("ExerciseName");
    const totalPay = await Pay.countDocuments();
    const videos = await Video.find({ VideoDeleted: 1 })
      .limit(5)
      .select("VideoName");
    const forgotPwList = await ForgotPassword.find()
      .limit(3)
      .select("FPUserEmail FPOTP");
    const categories = await Category.find({ CategoryDeleted: 1 })
      .limit(5)
      .select("CategoryName");

    const context = `
Khóa học:
${courses.map((c) => `- ${c.CourseName} (${c.CoursePrice} VNĐ)`).join("\n")}

Bài học:
${lessons.map((l) => `- ${l.LessonName}`).join("\n")}

Voucher:
${vouchers
  .map((v) => `- ${v.voucherCode}: ${v.discountPercentage}%`)
  .join("\n")}

Bài tập:
${exercises.map((e) => `- ${e.ExerciseName}`).join("\n")}

Video:
${videos.map((v) => `- ${v.VideoName}`).join("\n")}

Danh mục:
${categories.map((c) => `- ${c.CategoryName}`).join("\n")}

Tổng số giao dịch thanh toán: ${totalPay}

Yêu cầu quên mật khẩu gần đây:
${forgotPwList
  .map((f) => `- Email: ${f.FPUserEmail}, OTP: ${f.FPOTP}`)
  .join("\n")}
    `;

    res.send(context);
  } catch (err) {
    console.error("Lỗi lấy thông tin context:", err);
    res.status(500).send("Lỗi lấy thông tin website");
  }
});

module.exports = router;
