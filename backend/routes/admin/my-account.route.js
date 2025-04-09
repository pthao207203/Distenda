const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/my-account.controller");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get("/", controller.index);

router.get("/edit", controller.editItem);

router.post("/edit",
  // upload.single('AdminAvatar'), 
  // uploadCloud.upload, 
  controller.editPost
);

// router.delete("/delete/:LessonID", controller.deleteItem);

module.exports = router;
