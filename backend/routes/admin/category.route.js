const express = require("express")
const multer  = require('multer')
const router = express.Router()

const upload = multer()

const controller = require("../../controllers/admin/category.controller")
const validate = require("../../validates/admin/category.validate")
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")

router.get('/', controller.index)

router.get('/create', controller.createItem)

router.post('/create', upload.single('CategoryPicture'), uploadCloud.upload, validate.createPost, controller.createPost)

router.patch('/change-status/:status/:CategoryID', controller.changeStatus)

router.delete('/delete/:CategoryID', controller.deleteItem)

router.get('/edit/:CategoryID', controller.editItem)

router.patch(
  '/edit/:CategoryID', 
  upload.single('CategoryPicture'), 
  uploadCloud.upload, 
  validate.createPost, 
  controller.editPatch)

module.exports = router;