const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const notificationSchema = new mongoose.Schema({
  NotificationMessage: String,
  NotificationType: {
    type: String,
    default: "info", // success, error, warning, info
  },
  NotificationStatus: {
    type: Number,
    default: 1, // 1 = active, 0 = inactive
  },
  NotificationDeleted: {
    type: Number,
    default: 1,
  },
  UserId: String, // Ai nhận được thông báo này (optional nếu bạn muốn global)

  createdBy: {
    UserId: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  deletedBy: {
    UserId: String,
    deletedAt: Date,
  },
});

const Notification = mongoose.model("Notification", notificationSchema, "Notification");

module.exports = Notification;
