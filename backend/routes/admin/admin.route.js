const express = require("express")
const multer = require('multer')
const router = express.Router()

const upload = multer()

const controller = require("../../controllers/admin/admin.controller")
const validate = require("../../validates/admin/category.validate")
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")

router.get('/', controller.index)

router.get('/detail/:AdminID', controller.detail)

router.get('/create', controller.createItem)

router.post('/create', upload.single('AdminAvatar'), uploadCloud.upload, controller.createPost)

// router.patch('/change-status/:status/:AdminID', controller.changeStatus)

router.delete('/delete/:AdminID', controller.deleteItem)

router.get('/edit/:AdminID', controller.editItem)

router.patch(
  '/edit/:AdminID',
  upload.single('AdminAvatar'),
  uploadCloud.upload,
  // validate.createPost, 
  controller.editPatch)

module.exports = router;