const Admin = require("../../models/admin.model");
const Course = require("../../models/course.model");
const Lesson = require("../../models/lesson.model");
const Video = require("../../models/video.model");
const Banner = require("../../models/banner.model");
const mongoose = require('mongoose');

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
    const lessons = await Lesson.find({ CourseId: CourseID }).lean(); // Lấy tất cả chương của khóa học

    if (!lessons || lessons.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy lịch sử chương trong khóa học này" });
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

// [GET] /admin/lesson/detail/:LessonID/history
module.exports.getVideoHistoryByLessonID = async (req, res) => {
  try {
    const { LessonID } = req.params;  
    const videos = await Video.find({ LessonId: LessonID }).lean(); 

    if (!videos || videos.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy lịch sử video trong chương này" });
    }

    const logs = [];

    // Lấy lịch sử của mỗi bài học
    for (const video of videos) {
      const videoName = video.VideoName;
      const videoId = video._id;

      // THÊM
      if (video.createdBy?.UserId) {
        logs.push({
          action: "create",
          VideoId: videoId,
          VideoName: videoName,
          userId: video.createdBy.UserId,
          timestamp: video.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(video.editedBy)) {
        for (const edit of video.editedBy) {
          logs.push({
            action: "edit",
            VideoId: videoId,
            VideoName: videoName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (video.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          VideoId: videoId,
          VideoName: videoName,
          userId: video.deletedBy.UserId,
          timestamp: video.deletedBy.deletedAt,
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
    console.error("Lỗi getVideoHistoryByLessonID:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// [GET] /admin/video/detail/:VideoID/history
module.exports.getVideoHistoryByVideoID = async (req, res) => {
  try {
    const { VideoID } = req.params;  
    const videos = await Video.find({ _id: new mongoose.Types.ObjectId(VideoID) }).lean();

    if (!videos || videos.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy lịch sử video trong chương này" });
    }

    const logs = [];

    // Lấy lịch sử của mỗi bài học
    for (const video of videos) {
      const videoName = video.VideoName;
      const videoId = video._id;

      // THÊM
      if (video.createdBy?.UserId) {
        logs.push({
          action: "create",
          VideoId: videoId,
          VideoName: videoName,
          userId: video.createdBy.UserId,
          timestamp: video.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(video.editedBy)) {
        for (const edit of video.editedBy) {
          logs.push({
            action: "edit",
            VideoId: videoId,
            VideoName: videoName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (video.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          VideoId: videoId,
          VideoName: videoName,
          userId: video.deletedBy.UserId,
          timestamp: video.deletedBy.deletedAt,
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
    console.error("Lỗi getVideoHistoryByVideoID:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// [GET] /admin/admin/history
module.exports.getAdminHistory = async (req, res) => {
  try {
    const admins = await Admin.find({}).lean();
    const logs = [];

    for (const admin of admins) {
      const adminName = admin.AdminFullName;
      const adminId = admin._id;

      // THÊM
      if (admin.createdBy?.UserId) {
        logs.push({
          action: "create",
          AdminId: adminId,
          AdminName: adminName,
          userId: admin.createdBy.UserId,
          timestamp: admin.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(admin.editedBy)) {
        for (const edit of admin.editedBy) {
          logs.push({
            action: "edit",
            AdminId: adminId,
            AdminName: adminName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (admin.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          AdminId: adminId,
          AdminName: adminName,
          userId: admin.deletedBy.UserId,
          timestamp: admin.deletedBy.deletedAt,
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
    console.error("Lỗi getAdminHistory:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// [GET] /admin/admin/detail/:AdminID/history
module.exports.getAdminHistoryByAdminID = async (req, res) => {
  try {
    const { AdminID } = req.params;  
    const admins = await Admin.find({ _id: new mongoose.Types.ObjectId(AdminID) }).lean();

    if (!admins || admins.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy lịch sử chi tiết admin" });
    }

    const logs = [];

    for (const admin of admins) {
      const adminName = admin.AdminFullName;
      const adminId = admin._id;

      // THÊM
      if (admin.createdBy?.UserId) {
        logs.push({
          action: "create",
          AdminId: adminId,
          AdminName: adminName,
          userId: admin.createdBy.UserId,
          timestamp: admin.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(admin.editedBy)) {
        for (const edit of admin.editedBy) {
          logs.push({
            action: "edit",
            AdminId: adminId,
            AdminName: adminName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (admin.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          AdminId: adminId,
          AdminName: adminName,
          userId: admin.deletedBy.UserId,
          timestamp: admin.deletedBy.deletedAt,
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
    console.error("Lỗi getAdminHistoryByAdminID:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// [GET] /admin/banner/history
module.exports.getBannerHistory = async (req, res) => {
  try {
    const banners = await Banner.find({}).lean();
    const logs = [];

    for (const banner of banners) {
      const bannerName = banner.BannerName;
      const bannerId = banner._id;

      // THÊM
      if (banner.createdBy?.UserId) {
        logs.push({
          action: "create",
          BannerId: bannerId,
          BannerName: bannerName,
          userId: banner.createdBy.UserId,
          timestamp: banner.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(banner.editedBy)) {
        for (const edit of banner.editedBy) {
          logs.push({
            action: "edit",
            BannerId: bannerId,
            BannerName: bannerName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (banner.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          BannerId: bannerId,
          BannerName: bannerName,
          userId: banner.deletedBy.UserId,
          timestamp: banner.deletedBy.deletedAt,
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
    console.error("Lỗi getBannerHistory:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// [GET] /admin/banner/detail/:BannerID/history
module.exports.getBannerHistoryByBannerID = async (req, res) => {
  try {
    const { BannerID } = req.params; 
    const banners = await Banner.find({ _id: new mongoose.Types.ObjectId(BannerID) }).lean();

    if (!banners || banners.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy lịch sử chương trong khóa học này" });
    }

    const logs = [];

    // Lấy lịch sử của mỗi bài học
    for (const banner of banners) {
      const bannerName = banner.BannerName;
      const bannerId = banner._id;

      // THÊM
      if (banner.createdBy?.UserId) {
        logs.push({
          action: "create",
          BannerId: bannerId,
          BannerName: bannerName,
          userId: banner.createdBy.UserId,
          timestamp: banner.createdBy.createdAt,
        });
      }

      // SỬA
      if (Array.isArray(banner.editedBy)) {
        for (const edit of banner.editedBy) {
          logs.push({
            action: "edit",
            BannerId: bannerId,
            BannerName: bannerName,
            userId: edit.UserId,
            timestamp: edit.editedAt,
          });
        }
      }

      // XÓA
      if (banner.deletedBy?.UserId) {
        logs.push({
          action: "delete",
          BannerId: bannerId,
          BannerName: bannerName,
          userId: banner.deletedBy.UserId,
          timestamp: banner.deletedBy.deletedAt,
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
    console.error("Lỗi getBannerHistoryByBannerID:", err);
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};
