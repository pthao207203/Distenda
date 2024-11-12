const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/lesson.controller");
const validate = require("../../validates/admin/course.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

// router.patch('/change-status/:status/:CourseID', controller.changeStatus)

// router.delete('/delete/:CourseID', controller.deleteItem)

router.get("/create/:CourseID", controller.createItem);

router.post("/create/:CourseID", controller.createPost);

// router.get('/detail/:CourseID', controller.detailItem)

// router.get('/edit/:CourseID', controller.editItem)

// router.patch(
//   '/edit/:CourseID',
//   upload.single('CoursePicture'),
//   uploadCloud.upload,
//   validate.createPost,
//   controller.editPatch)

module.exports = router;
