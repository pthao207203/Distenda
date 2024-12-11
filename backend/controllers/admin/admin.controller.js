const md5 = require("md5");
const Admin = require("../../models/admin.model");
const Role = require("../../models/role.model");
const systemConfig = require("../../config/system");
const generateHelper = require("../../helpers/generate");

// [GET] /admin/admin
module.exports.index = async (req, res) => {
  let find = {
    AdminDeleted: 1,
  };

  const admin = await Admin.find(find).select("-AdminPassword -AdminToken").lean();

  for (const item of admin) {
    const role = await Role.findOne({
      _id: item.AdminRole_id,
      RoleDeleted: 1,
    });
    item.role = role;
  }
  res.json(admin)
  // res.render("admin/pages/admin/index", {
  //   pageTitle: "Danh sách tài khoản",
  //   admin: admin,
  // });
};

// [GET] /admin/admin/create
module.exports.createItem = async (req, res) => {
  const role = await Role.find({ RoleDeleted: 1 });

  res.render("admin/pages/admin/create", {
    pageTitle: "Thêm tài khoản",
    roles: role,
  });
};

// [POST] /admin/admin/create
module.exports.createPost = async (req, res) => {
  req.body.AdminStatus = req.body.AdminStatus == "active" ? 1 : 0;
  req.body.AdminPassword = md5(req.body.AdminPassword);
  req.body.AdminToken = generateHelper.generateRandomString(30);
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };

  const admin = new Admin(req.body);
  await admin.save();
  req.flash("success", "Thêm tài khoản admin thành công!");
  res.redirect(`${systemConfig.prefixAdmin}/admin`);
};

// // [PATCH] /admin/admin/change-status/:status/:AdminID
// module.exports.changeStatus = async (req, res) => {
//   const status = req.params.status;
//   const CategoryID = req.params.CategoryID;

//   await Category.updateOne({ _id: CategoryID}, {CategoryStatus: status == "active"?1:0})

//   req.flash('success', 'Cập nhật trạng thái thành công');

//   res.redirect('back')
// }

// [DELETE] /admin/admin/delete/:AdminID
module.exports.deleteItem = async (req, res) => {
  const AdminID = req.params.AdminID;

  await Admin.updateOne(
    { _id: AdminID },
    {
      AdminDeleted: 0,
      deletedBy: {
        UserId: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );

  req.flash("success", "Xóa thành công!");
  res.redirect(`${systemConfig.prefixAdmin}/admin`);
};

// [GET] /admin/admin/edit/:AdminID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      AdminDeleted: 1,
      _id: req.params.AdminID,
    };

    const listRole = await Role.find({
      RoleDeleted: 1,
    });

    const admin = await Admin.findOne(find);

    res.render("admin/pages/admin/edit", {
      pageTitle: "Chỉnh sửa khoá học",
      admin: admin,
      listRole: listRole,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy tài khoản!");
    res.redirect(`${systemConfig.prefixAdmin}/admin`);
  }
};

// [PATCH] /admin/admin/edit/:AdminID
module.exports.editPatch = async (req, res) => {
  req.body.AdminStatus = req.body.AdminStatus == "active" ? 1 : 0;

  try {
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    await Admin.updateOne(
      {
        _id: req.params.AdminID,
      },
      {
        ...req.body,
        $push: { editedBy: editedBy },
      }
    );

    req.flash("success", "Cập nhật thành công!");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại!");
  }

  res.redirect(`${systemConfig.prefixAdmin}/admin`);
};
