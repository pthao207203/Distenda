const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/course.controller");
const validate = require("../../validates/admin/course.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");
const historyController = require("../../controllers/admin/history.controller");

router.get("/", controller.index);

router.post("/change-status/:status/:CourseID", controller.changeStatus);

router.delete("/delete/:CourseID", controller.deleteItem);

router.get("/create", controller.createItem);

router.post(
  "/create",
  // upload.single('CoursePicture'),
  // uploadCloud.upload,
  // validate.createPost,
  controller.createPost
);

router.get("/detail/:CourseID", controller.detailItem);

router.get("/edit/:CourseID", controller.editItem);

router.post(
  "/edit/:CourseID",
  // upload.single('CoursePicture'),
  // uploadCloud.upload,
  // validate.createPost,
  controller.editPost
);
router.get("/history", historyController.getCourseHistory);
router.get("/detail/:CourseID/history", historyController.getLessonHistoryByCourseID);
// router.get("/update-all-course-profit", controller.updateAllCourseProfit);

module.exports = router;
