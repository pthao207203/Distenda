const express = require("express")
const multer  = require('multer')
const router = express.Router()

const upload = multer()

const controller = require("../../controllers/admin/course.controller")
const validate = require("../../validates/admin/course.validate")
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")

router.get('/', controller.index)

router.patch('/change-status/:status/:CourseID', controller.changeStatus)


router.delete('/delete/:CourseID', controller.deleteItem)

router.get('/create', controller.createItem)

router.post(
  '/create', 
  upload.single('CoursePicture'), 
  uploadCloud.upload, 
  validate.createPost, 
  controller.createPost)

router.get('/detail/:CourseID', controller.detailItem)

router.get('/edit/:CourseID', controller.editItem)

router.patch('/edit/:CourseID', upload.single('CoursePicture'), validate.createPost, controller.editPatch)

module.exports = router;