const Admin = require("../../models/admin.model");
const Course = require("../../models/course.model");
// const LessonHistory = require("../../models/lessonHistory.model");
// const ExerciseHistory = require("../../models/exerciseHistory.model");

// [GET] /admin/courses/history
module.exports.getCourseHistory = async (req, res) => {
  try {
    const courses = await Course.find({}).lean();
    const logs = [];

    for (const course of courses) {
      const courseName = course.CourseName;
      const courseId = course._id;

      // THÊM
      if (course.createdBy?.UserId) {
        logs.push({
          action: "create",
          CourseId: courseId,
          CourseName: courseName,
          userId: course.createdBy.UserId,
          timestamp: course.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(course.editedBy)) {
        for (const edit of course.editedBy) {
          logs.push({
            action: "edit",
            CourseId: courseId,
            CourseName: courseName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (course.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          CourseId: courseId,
          CourseName: courseName,
          userId: course.deletedBy.UserId,
          timestamp: course.deletedBy.deletedAt,
        });
      }
    }

    // Lấy thông tin user
    const userIds = [...new Set(logs.map(log => log.userId))];
    const users = await Admin.find({ _id: { $in: userIds } }).lean();
    const userMap = Object.fromEntries(users.map(u => [u._id.toString(), {
      name: u.AdminFullName,
      avatar: u.AdminAvatar,
    }]));

    // Gắn userName, userAvatar
    const result = logs.map(log => ({
      ...log,
      userName: userMap[log.userId]?.name || "Không rõ",
      userAvatar: userMap[log.userId]?.avatar || "/profile.svg",
    }));

    // Sort mới nhất trước
    result.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.json(result);
  } catch (err) {
    console.error("Lỗi getCourseHistory:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};


// // [GET] /admin/lessons/history/:LessonID
// module.exports.getLessonHistory = async (req, res) => {
//   try {
//     const histories = await LessonHistory.find({ LessonId: req.params.LessonID })
//       .sort({ timestamp: -1 })
//       .lean();
//     res.json(histories);
//   } catch (error) {
//     console.error("Lỗi lấy lịch sử chương học:", error);
//     res.status(500).json({
//       code: 500,
//       message: "Lỗi khi lấy lịch sử chương học",
//       error: error.message,
//     });
//   }
// };

// // [GET] /admin/exercises/history/:ExerciseID
// module.exports.getExerciseHistory = async (req, res) => {
//   try {
//     const histories = await ExerciseHistory.find({ ExerciseId: req.params.ExerciseID })
//       .sort({ timestamp: -1 })
//       .lean();
//     res.json(histories);
//   } catch (error) {
//     console.error("Lỗi lấy lịch sử bài tập:", error);
//     res.status(500).json({
//       code: 500,
//       message: "Lỗi khi lấy lịch sử bài tập",
//       error: error.message,
//     });
//   }
// };
