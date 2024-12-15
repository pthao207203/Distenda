const md5 = require("md5");
const Admin = require("../../models/admin.model");
const Banner = require("../../models/banner.model");
const Role = require("../../models/role.model");
const Course = require("../../models/course.model");
const systemConfig = require("../../config/system");
const generateHelper = require("../../helpers/generate");

// [GET] /admin/banner
module.exports.index = async (req, res) => {
  let find = {
    BannerDeleted: 1,
  };

  const banner = await Banner.find(find).lean();

  for (const item of banner) {
    const course = await Course.findOne({
      _id: item.BannerCourse,
      CourseDeleted: 1,
    });
    item.course = course;
  }
  console.log(banner)
  res.json(banner)
  // res.render("admin/pages/admin/index", {
  //   pageTitle: "Danh sách tài khoản",
  //   admin: admin,
  // });
};

// [GET] /admin/banner/detail/:BannerID
module.exports.detail = async (req, res) => {
  const find = {
    BannerDeleted: 1,
    _id: req.params.BannerID,
  };

  const banner = await Banner.findOne(find).lean();
  const course = await Course.findOne({
    _id: banner.BannerCourse
  })
  banner.course = course
  console.log(banner)
  res.json(banner)
  // res.render("admin/pages/admin/index", {
  //   pageTitle: "Danh sách tài khoản",
  //   admin: user,
  // });
};

// [GET] /admin/banner/create
module.exports.createItem = async (req, res) => {
  const course = await Course.find({ CourseDeleted: 1 });

  // res.render("admin/pages/admin/create", {
  //   pageTitle: "Thêm tài khoản",
  //   roles: role,
  // });
  res.json(course)
};

// [POST] /admin/banner/create
module.exports.createPost = async (req, res) => {
  // console.log(req.body)
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };

  const banner = new Banner(req.body);
  await banner.save();
  res.json({
    code: 200,
    message: "Tạo tài khoản thành công!"
  })
  // req.flash("success", "Thêm tài khoản admin thành công!");
  // res.redirect(`${systemConfig.prefixAdmin}/admin`);
};

// // [PATCH] /admin/banner/change-status/:status/:AdminID
// module.exports.changeStatus = async (req, res) => {
//   const status = req.params.status;
//   const CategoryID = req.params.CategoryID;

//   await Category.updateOne({ _id: CategoryID}, {CategoryStatus: status == "active"?1:0})

//   req.flash('success', 'Cập nhật trạng thái thành công');

//   res.redirect('back')
// }

// [DELETE] /admin/banner/delete/:BannerID
module.exports.deleteItem = async (req, res) => {
  const BannerID = req.params.BannerID;

  await Banner.updateOne(
    { _id: BannerID },
    {
      BannerDeleted: 0,
      deletedBy: {
        UserId: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );
  res.json({
    code: 200,
    message: "Xoá banner thành công!!!",
  })

  // req.flash("success", "Xóa thành công!");
  // res.redirect(`${systemConfig.prefixAdmin}/admin`);
};

// [GET] /admin/banner/edit/:BannerID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      BannerDeleted: 1,
      _id: req.params.BannerID,
    };

    const banner = await Banner.findOne(find).lean();

    const course = await Course.find({ CourseDeleted: 1 });
    banner.course = course
    res.json(banner)
    // res.render("admin/pages/admin/edit", {
    //   pageTitle: "Chỉnh sửa khoá học",
    //   admin: admin,
    //   listRole: listRole,
    // });
  } catch (error) {
    console.log(error)
    res.json({
      code: 400,
      message: "Không tìm banner!"
    })
    // req.flash("error", "Không tìm thấy tài khoản!");
    // res.redirect(`${systemConfig.prefixAdmin}/admin`);
  }
};

// [POST] /admin/banner/edit/:BannerID
module.exports.editPost = async (req, res) => {
  try {
    console.log(req.body)
    const { editedBy, ...updateFields } = req.body;
    const newEditedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };

    await Banner.updateOne(
      { _id: req.params.BannerID },
      {
        ...updateFields, // Cập nhật các trường khác
        $push: { editedBy: newEditedBy }, // Thêm đối tượng vào mảng editedBy
      }
    );

    // req.flash("success", "Cập nhật thành công!");
    res.json({
      code: 200,
      message: "Cập nhật thành công!",
    })
  } catch (error) {
    console.log(error)
    res.json({
      code: 200,
      message: "Cập nhật thất bại!",
    })
    // req.flash("error", "Cập nhật thất bại!");
  }
  // res.redirect(`${systemConfig.prefixAdmin}/admin`);
};
