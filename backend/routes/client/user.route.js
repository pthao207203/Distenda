const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/user.controller");

router.get("/like/add/:CourseID", controller.addLike);

router.get("/like/cancel/:CourseID", controller.cancelLike);

// router.get("/pay/:CourseID", controller.pay);

// router.post("/pay/:CourseID", controller.payPost);

router.get("/profile", controller.profile);

router.post("/profile", controller.profilePost);

router.get("/profile/edit", controller.profileEdit);

router.post('/comment/add/:CourseID', controller.addComment)

router.post("/video-status/mark-video-completed", controller.markVideoAsCompleted);

router.get("/video-status/:courseId", controller.getVideoStatus)

module.exports = router;
