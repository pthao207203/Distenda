const express = require("express")
const multer = require('multer')
const router = express.Router()

const upload = multer()

const controller = require("../../controllers/admin/user.controller")
const validate = require("../../validates/admin/category.validate")
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")

router.get('/', controller.index)

router.get('/detail/:UserID', controller.detail)

router.get('/create', controller.createItem)

router.post('/create', upload.single('UserAvatar'), uploadCloud.upload, controller.createPost)

router.post('/change-status/:status/:UserID', controller.changeStatus)

router.delete('/delete/:UserID', controller.deleteItem)

router.get('/edit/:UserID', controller.editItem)

router.patch(
  '/edit/:UserID',
  upload.single('UserAvatar'),
  uploadCloud.upload,
  // validate.createPost, 
  controller.editPatch)

module.exports = router;