const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/pay.controller");

router.get("/:CourseID", controller.pay);

router.post("/:CourseID", controller.payPost);

module.exports = router;