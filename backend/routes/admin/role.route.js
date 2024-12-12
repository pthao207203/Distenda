const express = require("express")
const multer = require('multer')
const router = express.Router()

const upload = multer()

const controller = require("../../controllers/admin/role.controller")
const validate = require("../../validates/admin/role.validate")

router.get('/', controller.index)

router.get('/create', controller.createItem)

router.post('/create', validate.createPost, controller.createPost)

router.delete('/delete/:RoleID', controller.deleteItem)

router.get('/edit/:RoleID', controller.editItem)

router.post(
  '/edit/:RoleID',
  controller.editPatch
)

router.get('/permission', controller.permission)
router.patch('/permission', controller.permissionPatch)

module.exports = router;