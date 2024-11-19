const express = require("express")
const router = express.Router()

const controller = require("../../controllers/client/category.controller")

// router.get('/', controller.index)

router.get('/:CategorySlug', controller.detail)

module.exports = router;