const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/video.controller");
const validate = require("../../validates/admin/course.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

// router.delete("/delete/:LessonID", controller.deleteItem);

router.get("/create/:LessonID", controller.createItem);

router.post("/create/:LessonID", controller.createPost);

router.get("/edit/:VideoID", controller.editItem);

router.patch("/edit/:VideoID", controller.editPatch);

// router.get("/detail/:LessonID", controller.detailItem);

module.exports = router;
