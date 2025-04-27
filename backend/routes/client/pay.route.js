const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/pay.controller");

router.get("/:CourseSlug", controller.pay);

router.post("/:CourseSlug", controller.payPost);

router.post("/:CourseSlug/momo", controller.payMoMo);

router.post('/dummy-callback', (req, res) => {
    console.log("📥 MoMo gọi dummy callback, bỏ qua.");
    res.status(200).send("OK");
});

module.exports = router;