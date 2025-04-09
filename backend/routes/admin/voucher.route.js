const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/vourcher.controller");

router.get('/', controller.index);

router.get('/detail/:VoucherID', controller.detail);

router.get('/create', controller.createItem);

router.post(
  '/create',
  controller.createPost
);

router.delete('/delete/:VoucherID', controller.deleteItem);

router.get('/edit/:VoucherID', controller.editItem);

router.post(
  '/edit/:VoucherID',
  controller.editPost
);

module.exports = router;
