const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/exercise.controller");
const validate = require("../../validates/admin/course.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.delete("/delete/:LessonID", controller.deleteItem);

router.get("/create/:LessonID", controller.createItem);

router.post("/create/:LessonID", controller.createPost);

router.get("/edit/:ExerciseID", controller.editItem);

router.post("/edit/:LessonID", controller.editPost);

router.get("/detail/:LessonID", controller.detailItem);

module.exports = router;
