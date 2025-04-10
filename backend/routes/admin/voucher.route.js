const Voucher = require("../../models/voucher.model"); // Import model Voucher

// [GET] /admin/voucher
module.exports.index = async (req, res) => {
  try {
    const vouchers = await Voucher.find({
      VoucherDeleted: 1
    }).lean(); // Lấy tất cả voucher chưa bị xóa
    res.json(vouchers);
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách voucher",
      error: err
    });
  }
};

// [GET] /admin/voucher/detail/:VoucherID
module.exports.detail = async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.VoucherID).lean(); // Lấy voucher theo VoucherID
    if (!voucher) {
      return res.status(404).json({
        message: "Voucher không tồn tại"
      });
    }
    res.json(voucher);
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi lấy chi tiết voucher",
      error: err
    });
  }
};

// [POST] /admin/voucher/create
module.exports.createPost = async (req, res) => {
  try {
    const {
      voucherCode,
      minAmount,
      discountPercentage,
      discountAmount,
      validityPeriod,
      status,
      createdBy
    } = req.body;

    // Kiểm tra nếu voucher đã tồn tại
    const existingVoucher = await Voucher.findOne({
      voucherCode
    });
    if (existingVoucher) {
      return res.status(400).json({
        message: "Voucher với mã này đã tồn tại."
      });
    }

    const newVoucher = new Voucher({
      voucherCode,
      minAmount,
      discountPercentage,
      discountAmount,
      validityPeriod,
      status,
      createdBy,
    });

    await newVoucher.save();
    res.json({
      message: "Tạo voucher thành công!"
    });
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi tạo voucher",
      error: err
    });
  }
};

// [DELETE] /admin/voucher/delete/:VoucherID
module.exports.deleteItem = async (req, res) => {
  try {
    const deletedVoucher = await Voucher.findByIdAndUpdate(
      req.params.VoucherID, {
        VoucherDeleted: 0,
        deletedBy: {
          UserId: req.body.UserId,
          deletedAt: new Date()
        }
      }, {
        new: true
      }
    );

    if (!deletedVoucher) {
      return res.status(404).json({
        message: "Voucher không tồn tại"
      });
    }

    res.json({
      message: "Xóa voucher thành công!"
    });
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi xóa voucher",
      error: err
    });
  }
};

// [GET] /admin/voucher/edit/:VoucherID
module.exports.editItem = async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.VoucherID).lean(); // Lấy voucher theo ID
    if (!voucher) {
      return res.status(404).json({
        message: "Voucher không tồn tại"
      });
    }
    res.json(voucher);
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi lấy voucher để chỉnh sửa",
      error: err
    });
  }
};

// [POST] /admin/voucher/edit/:VoucherID
module.exports.editPost = async (req, res) => {
  try {
    const updatedVoucher = await Voucher.findByIdAndUpdate(
      req.params.VoucherID,
      req.body, // Cập nhật các trường của voucher
      {
        new: true
      }
    );

    if (!updatedVoucher) {
      return res.status(404).json({
        message: "Voucher không tồn tại"
      });
    }

    res.json({
      message: "Cập nhật voucher thành công!"
    });
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi cập nhật voucher",
      error: err
    });
  }
};