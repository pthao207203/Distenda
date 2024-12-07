const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/pay.controller");

router.get("/:CourseSlug", controller.pay);

router.post("/:CourseSlug", controller.payPost);

module.exports = router;