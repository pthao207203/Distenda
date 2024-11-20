const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/user.controller");

router.get("/like/add/:CourseID", controller.addLike);

router.get("/like/cancel/:CourseID", controller.cancelLike);

router.get("/pay/:CourseID", controller.pay);

router.post("/pay/:CourseID", controller.payPost);

router.get("/profile", controller.profile);

router.get("/profile/edit", controller.profileEdit);

module.exports = router;
