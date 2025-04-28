const express = require("express")
// const multer = require('multer')
const router = express.Router()

// const upload = multer()

const controller = require("../../controllers/admin/banner.controller")
const historyController = require("../../controllers/admin/history.controller")

router.get('/', controller.index)
router.get('/history', historyController.getBannerHistory)

router.get('/detail/:BannerID', controller.detail)
router.get('/detail/:BannerID/history', historyController.getBannerHistoryByBannerID)

router.get('/create', controller.createItem)

router.post(
  '/create',
  // upload.single('AdminAvatar'), 
  // uploadCloud.upload, 
  controller.createPost
)

// router.patch('/change-status/:status/:BannerID', controller.changeStatus)

router.delete('/delete/:BannerID', controller.deleteItem)

router.get('/edit/:BannerID', controller.editItem)

router.post(
  '/edit/:BannerID',
  // upload.single('AdminAvatar'),
  // uploadCloud.upload,
  // validate.createPost, 
  controller.editPost)

module.exports = router;