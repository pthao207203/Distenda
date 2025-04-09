const Voucher = require("../../models/voucher.model");
const Course = require("../../models/course.model");
const systemConfig = require("../../config/system");

// [GET] /admin/voucher
module.exports.index = async (req, res) => {
    let find = {
        VoucherDeleted: 1,
    };

    const vouchers = await Voucher.find(find).lean();

    for (const item of vouchers) {
        const course = await Course.findOne({
            _id: item.VoucherCourse,
            CourseDeleted: 1,
        });
        item.course = course;
    }

    console.log(vouchers);
    res.json(vouchers);
};

// [GET] /admin/voucher/detail/:VoucherID
module.exports.detail = async (req, res) => {
    const find = {
        VoucherDeleted: 1,
        _id: req.params.VoucherID,
    };

    const voucher = await Voucher.findOne(find).lean();
    const course = await Course.findOne({
        _id: voucher.VoucherCourse,
    });
    voucher.course = course;
    console.log(voucher);
    res.json(voucher);
};

// [GET] /admin/voucher/create
module.exports.createItem = async (req, res) => {
    const course = await Course.find({
        CourseDeleted: 1
    });

    res.json(course);
};

// [POST] /admin/voucher/create
module.exports.createPost = async (req, res) => {
    req.body.createdBy = {
        UserId: res.locals.user.id,
    };

    const voucher = new Voucher(req.body);
    await voucher.save();
    res.json({
        code: 200,
        message: "Tạo voucher thành công!",
    });
};

// [DELETE] /admin/voucher/delete/:VoucherID
module.exports.deleteItem = async (req, res) => {
    const VoucherID = req.params.VoucherID;

    await Voucher.updateOne({
        _id: VoucherID
    }, {
        VoucherDeleted: 0,
        deletedBy: {
            UserId: res.locals.user.id,
            deletedAt: new Date(),
        },
    });

    res.json({
        code: 200,
        message: "Xoá voucher thành công!",
    });
};

// [GET] /admin/voucher/edit/:VoucherID
module.exports.editItem = async (req, res) => {
    try {
        const find = {
            VoucherDeleted: 1,
            _id: req.params.VoucherID,
        };

        const voucher = await Voucher.findOne(find).lean();
        const course = await Course.find({
            CourseDeleted: 1
        });
        voucher.course = course;

        res.json(voucher);
    } catch (error) {
        console.log(error);
        res.json({
            code: 400,
            message: "Không tìm thấy voucher!",
        });
    }
};

// [POST] /admin/voucher/edit/:VoucherID
module.exports.editPost = async (req, res) => {
    try {
        console.log(req.body);
        const {
            editedBy,
            ...updateFields
        } = req.body;
        const newEditedBy = {
            UserId: res.locals.user.id,
            editedAt: new Date(),
        };

        await Voucher.updateOne({
            _id: req.params.VoucherID
        }, {
            ...updateFields, // Cập nhật các trường khác
            $push: {
                editedBy: newEditedBy
            }, // Thêm đối tượng vào mảng editedBy
        });

        res.json({
            code: 200,
            message: "Cập nhật voucher thành công!",
        });
    } catch (error) {
        console.log(error);
        res.json({
            code: 400,
            message: "Cập nhật voucher thất bại!",
        });
    }
};
