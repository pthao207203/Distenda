const Admin = require("../../models/admin.model");
const Course = require("../../models/course.model");
const Lesson = require("../../models/lesson.model");
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
      userName: userMap[log.userId]?.name || "Không xác định",
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

// [GET] /admin/courses/detail/:CourseID/history
module.exports.getLessonHistoryByCourseID = async (req, res) => {
  try {
    const { CourseID } = req.params;  // Lấy CourseID từ tham số URL
    const lessons = await Lesson.find({ CourseId: CourseID }).lean(); // Lấy tất cả bài học của khóa học

    if (!lessons || lessons.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy bài học trong khóa học này" });
    }

    const logs = [];

    // Lấy lịch sử của mỗi bài học
    for (const lesson of lessons) {
      const lessonName = lesson.LessonName;
      const lessonId = lesson._id;

      // THÊM
      if (lesson.createdBy?.UserId) {
        logs.push({
          action: "create",
          LessonId: lessonId,
          LessonName: lessonName,
          userId: lesson.createdBy.UserId,
          timestamp: lesson.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(lesson.editedBy)) {
        for (const edit of lesson.editedBy) {
          logs.push({
            action: "edit",
            LessonId: lessonId,
            LessonName: lessonName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (lesson.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          LessonId: lessonId,
          LessonName: lessonName,
          userId: lesson.deletedBy.UserId,
          timestamp: lesson.deletedBy.deletedAt,
        });
      }
    }

    // Lấy thông tin người dùng
    const userIds = [...new Set(logs.map(log => log.userId))];
    const users = await Admin.find({ _id: { $in: userIds } }).lean();
    const userMap = Object.fromEntries(users.map(u => [u._id.toString(), {
      name: u.AdminFullName,
      avatar: u.AdminAvatar,
    }]));

    // Gắn userName, userAvatar vào logs
    const result = logs.map(log => ({
      ...log,
      userName: userMap[log.userId]?.name || "Không xác định",
      userAvatar: userMap[log.userId]?.avatar || "/profile.svg",
    }));

    // Sắp xếp lịch sử từ mới nhất đến cũ nhất
    result.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.json(result);
  } catch (err) {
    console.error("Lỗi getLessonHistoryByCourseID:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

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
