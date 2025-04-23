const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/lesson.controller");
const validate = require("../../validates/admin/course.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");
const historyController = require("../../controllers/admin/history.controller");

router.delete("/delete/:LessonID", controller.deleteItem);

router.get("/create/:CourseID", controller.createItem);

router.post("/create/:CourseID", controller.createPost);

router.get("/edit/:LessonID", controller.editItem);

router.post("/edit/:LessonID", controller.editPost);

router.get("/detail/:LessonID", controller.detailItem);

router.get("/detail/:LessonID/history", historyController.getVideoHistoryByLessonID);

module.exports = router;
