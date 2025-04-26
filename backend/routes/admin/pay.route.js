const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/pay.controller");

router.get("/", controller.pay);
router.get("/detail/:PayID", controller.payDetail);

// // Thêm route mới
// router.get("/fix-data", controller.fixPayData);

module.exports = router;
