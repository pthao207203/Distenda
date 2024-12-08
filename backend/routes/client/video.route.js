const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/client/video.controller");

router.get("/detail/:VideoSlug", controller.detailItem);

module.exports = router;
