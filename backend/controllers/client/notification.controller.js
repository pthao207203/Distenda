const Notification = require("../../models/notification.model");
const User = require("../../models/user.model");

// [POST] /notification/add - Tạo thông báo mới
module.exports.add = async (req, res) => {
    const { message, type = "info", userToken } = req.body;
    console.log(req.body);

    const test = await User.findOne({
        UserToken: userToken
    })
    try {
      // Kiểm tra xem thông báo đã được gửi chưa
      const existingNotifications = await Notification.find({
        UserId: test._id,
        NotificationMessage: message,
        NotificationStatus: 1,
        NotificationDeleted: 1
      });
  
      if (existingNotifications.length > 0) {
        return res.json({ success: false, message: "Thông báo này đã được gửi trước đó." });
      }
  
      // Nếu chưa có thông báo tương tự, tạo thông báo mới
      await Notification.create({
        NotificationMessage: message,
        NotificationType: type,
        NotificationStatus: 1,
        NotificationDeleted: 1,
        UserId: test._id,
        createdBy: {
          UserId: test._id,
          createdAt: new Date(),
        },
      });
  
      res.json({ success: true, message: "Thông báo đã được tạo" });
    } catch (error) {
      console.error("Lỗi tạo thông báo:", error);
      res.status(500).json({ success: false, message: "Tạo thông báo thất bại", error });
    }
};
  

// [GET] /notification/user/:userId - Lấy danh sách thông báo của người dùng
module.exports.getUserNotifications = async (req, res) => {
  try {
    const { userToken } = req.params;

    const user = await User.findOne({ UserToken: userToken });
    if (!user) {
      return res.status(404).json({ success: false, message: "Không tìm thấy user" });
    }

    const notifications = await Notification.find({
      UserId: user._id,
      NotificationDeleted: 1,
      NotificationStatus: 1,
    }).sort({ "createdBy.createdAt": -1 });

    if (notifications.length === 0) {
      return res.json({ success: false, message: "Không có thông báo nào." });
    }

    res.json({ success: true, data: notifications });
  } catch (error) {
    console.error("Lỗi khi lấy thông báo:", error);
    res.status(500).json({ success: false, message: "Không thể lấy thông báo", error: error.message });
  }
};


// [DELETE] /notification/:id - Xoá thông báo
module.exports.deleteNotification = async (req, res) => {
  try {
    // Xóa thực tế document thay vì chỉ update
    const result = await Notification.deleteOne({ _id: req.params.id });
    

    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Không tìm thấy thông báo để xóa" });
    }

    res.json({ success: true, message: "Xoá thông báo thành công" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Xoá thất bại", error: error.message });
  }
};
