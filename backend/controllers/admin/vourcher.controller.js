const Voucher = require("../../models/voucher.model");

module.exports.index = async (req, res) => {
  try {
    const vouchers = await Voucher.find({}).lean();
    res.json(vouchers);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách voucher", error: err });
  }
};

module.exports.detail = async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.VoucherID).lean();
    if (!voucher) {
      return res.status(404).json({ message: "Voucher không tồn tại" });
    }
    res.json(voucher);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy chi tiết voucher", error: err });
  }
};

module.exports.createPost = async (req, res) => {
  try {
    const newVoucher = new Voucher(req.body);
    await newVoucher.save();
    res.json({ message: "Tạo voucher thành công!" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi tạo voucher", error: err });
  }
};

module.exports.deleteItem = async (req, res) => {
  try {
    const deletedVoucher = await Voucher.findByIdAndUpdate(
      req.params.VoucherID,
      { BannerDeleted: 0 },
      { new: true }
    );
    if (!deletedVoucher) {
      return res.status(404).json({ message: "Voucher không tìm thấy" });
    }
    res.json({ message: "Xóa voucher thành công!" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi xóa voucher", error: err });
  }
};

module.exports.editItem = async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.VoucherID).lean();
    if (!voucher) {
      return res.status(404).json({ message: "Voucher không tìm thấy" });
    }
    res.json(voucher);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy voucher để chỉnh sửa", error: err });
  }
};

module.exports.editPost = async (req, res) => {
  try {
    const updatedVoucher = await Voucher.findByIdAndUpdate(
      req.params.VoucherID,
      req.body,
      { new: true }
    );
    if (!updatedVoucher) {
      return res.status(404).json({ message: "Voucher không tìm thấy" });
    }
    res.json({ message: "Cập nhật voucher thành công!" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi cập nhật voucher", error: err });
  }
};