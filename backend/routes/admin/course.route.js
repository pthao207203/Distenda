const express = require("express")
const router = express.Router()

const controller = require("../../controllers/admin/course.controller")

router.get('/', controller.index)

router.get('/change-status/:status/:CourseID', controller.changeStatus)

module.exports = router;