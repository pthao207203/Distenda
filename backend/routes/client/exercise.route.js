const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/client/exercise.controller");
const validate = require("../../validates/admin/course.validate");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get("/detail/:ExerciseSlug", controller.detailItem);
router.post("/check/:ExerciseSlug", controller.check);
router.post("/submit/:ExerciseSlug", controller.submit);

module.exports = router;
