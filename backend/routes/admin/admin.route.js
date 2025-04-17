const express = require("express")
const multer = require('multer')
const router = express.Router()

const upload = multer()

const controller = require("../../controllers/admin/admin.controller")
const validate = require("../../validates/admin/category.validate")
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")
const historyController = require("../../controllers/admin/history.controller");

router.get('/', controller.index)

router.get('/history', historyController.getAdminHistory)

router.get('/detail/:AdminID', controller.detail)
router.get('/detail/:AdminID/history', historyController.getAdminHistoryByAdminID)

router.get('/create', controller.createItem)

router.post('/create', upload.single('AdminAvatar'), uploadCloud.upload, controller.createPost)

// router.patch('/change-status/:status/:AdminID', controller.changeStatus)

router.delete('/delete/:AdminID', controller.deleteItem)

router.get('/edit/:AdminID', controller.editItem)

router.post(
  '/edit/:AdminID',
  // upload.single('AdminAvatar'),
  // uploadCloud.upload,
  // validate.createPost, 
  controller.editPost)

module.exports = router;