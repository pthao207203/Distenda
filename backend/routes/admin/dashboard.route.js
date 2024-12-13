const express = require("express")
const router = express.Router()

const controller = require("../../controllers/admin/dashboard.controller")

router.get('/', controller.dashboard)

router.get('/header', controller.header)

router.get('/role', controller.role)

module.exports = router;