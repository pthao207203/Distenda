const Voucher = require("../../models/voucher.model");
const Course = require("../../models/course.model");
const systemConfig = require("../../config/system");

// [GET] /admin/voucher
module.exports.index = async (req, res) => {
    try {
        const vouchers = await Voucher.find({
            VoucherDeleted: 1
        }).lean();

        // Sử dụng populate để lấy thông tin course mà không cần vòng lặp
        const vouchersWithCourse = await Voucher.populate(vouchers, {
            path: 'VoucherCourse', // Tên trường liên kết với course
            match: {
                CourseDeleted: 1
            }, // Điều kiện lọc đối với course
        });

        res.json(vouchersWithCourse);
    } catch (err) {
        console.error('Error fetching vouchers:', err);
        res.status(500).json({
            message: "Lỗi khi lấy danh sách voucher",
            error: err
        });
    }
};

// [GET] /admin/voucher/detail/:VoucherID
module.exports.detail = async (req, res) => {
    try {
        const voucher = await Voucher.findOne({
            VoucherDeleted: 1,
            _id: req.params.VoucherID,
        }).lean();

        if (!voucher) {
            return res.status(404).json({
                message: "Voucher không tồn tại"
            });
        }

        const course = await Course.findOne({
            _id: voucher.VoucherCourse
        }).lean();
        voucher.course = course;

        res.json(voucher);
    } catch (err) {
        console.error('Error fetching voucher details:', err);
        res.status(500).json({
            message: "Lỗi khi lấy chi tiết voucher",
            error: err
        });
    }
};

// [POST] /admin/voucher/create
module.exports.createPost = async (req, res) => {
    try {
        req.body.createdBy = {
            UserId: res.locals.user.id,
        };

        const voucher = new Voucher(req.body);
        await voucher.save();
        res.json({
            code: 200,
            message: "Tạo voucher thành công!",
        });
    } catch (err) {
        console.error('Error creating voucher:', err);
        res.status(500).json({
            message: "Lỗi khi tạo voucher",
            error: err
        });
    }
};

// [DELETE] /admin/voucher/delete/:VoucherID
module.exports.deleteItem = async (req, res) => {
    try {
        const updatedVoucher = await Voucher.updateOne({
            _id: req.params.VoucherID
        }, {
            VoucherDeleted: 0,
            deletedBy: {
                UserId: res.locals.user.id,
                deletedAt: new Date(),
            },
        });

        if (updatedVoucher.nModified === 0) {
            return res.status(404).json({
                message: "Voucher không tồn tại"
            });
        }

        res.json({
            code: 200,
            message: "Xoá voucher thành công!",
        });
    } catch (err) {
        console.error('Error deleting voucher:', err);
        res.status(500).json({
            message: "Lỗi khi xóa voucher",
            error: err
        });
    }
};

// [GET] /admin/voucher/edit/:VoucherID
module.exports.editItem = async (req, res) => {
    try {
        const voucher = await Voucher.findOne({
            VoucherDeleted: 1,
            _id: req.params.VoucherID,
        }).lean();

        if (!voucher) {
            return res.status(404).json({
                message: "Voucher không tồn tại"
            });
        }

        const course = await Course.find({
            CourseDeleted: 1
        }).lean();
        voucher.course = course;

        res.json(voucher);
    } catch (err) {
        console.error('Error fetching voucher for edit:', err);
        res.status(500).json({
            message: "Lỗi khi lấy voucher để chỉnh sửa",
            error: err
        });
    }
};

// [POST] /admin/voucher/edit/:VoucherID
module.exports.editPost = async (req, res) => {
    try {
        const {
            editedBy,
            ...updateFields
        } = req.body;
        const newEditedBy = {
            UserId: res.locals.user.id,
            editedAt: new Date(),
        };

        const updatedVoucher = await Voucher.updateOne({
            _id: req.params.VoucherID
        }, {
            ...updateFields,
            $push: {
                editedBy: newEditedBy
            }, // Thêm đối tượng vào mảng editedBy
        });

        if (updatedVoucher.nModified === 0) {
            return res.status(404).json({
                message: "Voucher không tồn tại"
            });
        }

        res.json({
            code: 200,
            message: "Cập nhật voucher thành công!",
        });
    } catch (err) {
        console.error('Error updating voucher:', err);
        res.status(500).json({
            message: "Lỗi khi cập nhật voucher",
            error: err
        });
    }
};
