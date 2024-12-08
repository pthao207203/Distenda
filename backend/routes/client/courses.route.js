const express = require("express")
const router = express.Router()

const controller = require("../../controllers/client/course.controller")

router.get('/', controller.index)

router.get('/completed', controller.indexCompleted)

router.get('/purchased', controller.indexPurchased)

router.get('/studying', controller.indexStudying)

router.get('/detail/:CourseSlug', controller.detail)

module.exports = router;