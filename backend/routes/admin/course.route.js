const express = require("express")
const multer  = require('multer')
const router = express.Router()
const storageMulter = require("../../helpers/storageMulter")
const upload = multer({storage: storageMulter()})

const controller = require("../../controllers/admin/course.controller")
const validate = require("../../validates/admin/course.validate")

router.get('/', controller.index)

router.patch('/change-status/:status/:CourseID', controller.changeStatus)


router.delete('/delete/:CourseID', controller.deleteItem)

router.get('/create', controller.createItem)

router.post('/create', upload.single('CoursePicture'), validate.createPost, controller.createPost)

router.get('/detail/:CourseID', controller.detailItem)

router.get('/edit/:CourseID', controller.editItem)

router.patch('/edit/:CourseID', upload.single('CoursePicture'), validate.createPost, controller.editPatch)

module.exports = router;