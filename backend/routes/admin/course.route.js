const express = require("express")
const router = express.Router()

const controller = require("../../controllers/admin/course.controller")

router.get('/', controller.index)

router.patch('/change-status/:status/:CourseID', controller.changeStatus)


router.delete('/delete/:CourseID', controller.deleteItem)

router.get('/create', controller.createItem)

router.post('/create', controller.createPost)

module.exports = router;