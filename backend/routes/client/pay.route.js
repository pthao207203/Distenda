const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/pay.controller");

// router.get("/:CourseSlug", controller.pay);

router.post("/:CourseSlug", controller.payPost);

router.post("/:CourseSlug/momo", controller.payMoMo);

// router.post('/callback', controller.handleCallback);

module.exports = router;