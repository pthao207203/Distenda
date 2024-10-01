const express = require("express")
const router = express.Router()

const controller = require("../../controllers/client/course.controller")

router.get('/', controller.index)

module.exports = router;