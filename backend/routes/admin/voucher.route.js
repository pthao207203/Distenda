const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/vourcher.controller");

// Route để lấy tất cả voucher
router.get('/', controller.index);

// Route để lấy chi tiết một voucher dựa trên ID
router.get('/detail/:VoucherID', controller.detail);

// Route để hiển thị form tạo voucher (GET)
// router.get('/create', controller.createItem);

// Route để tạo mới voucher (POST)
router.post('/create', controller.createPost);

// Route để xóa voucher (DELETE)
router.delete('/delete/:VoucherID', controller.deleteItem);

// Route để hiển thị form chỉnh sửa voucher dựa trên ID
router.get('/edit/:VoucherID', controller.editItem);

// Route để chỉnh sửa voucher (POST)
router.post('/edit/:VoucherID', controller.editPost);

module.exports = router;
