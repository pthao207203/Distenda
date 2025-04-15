const express = require("express");
const router = express.Router();
const notificationController = require("../../controllers/client/notification.controller");

// Thêm thông báo
router.post("/add", notificationController.add);

// Lấy thông báo của user
router.get("/user/:userToken", notificationController.getUserNotifications);

// Xoá thông báo
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
