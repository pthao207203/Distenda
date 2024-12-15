const Role = require("../../models/role.model");
const systemConfig = require("../../config/system");

// [GET] /admin/role
module.exports.index = async (req, res) => {
  let find = {
    RoleDeleted: 1,
  };

  const roles = await Role.find(find);

  res.render("admin/pages/role/index", {
    pageTitle: "Danh mục nhóm quyền",
    roles: roles,
  });
};

// [GET] /admin/role/create
module.exports.createItem = async (req, res) => {
  let find = {
    RoleDeleted: 1,
  };

  const roles = await Role.find(find);

  res.render("admin/pages/role/create", {
    pageTitle: "Thêm nhóm quyền",
    roles: roles,
  });
};
// [POST] /admin/role/create
module.exports.createPost = async (req, res) => {
  console.log(req.body);

  const roles = new Role(req.body);
  await roles.save();

  res.redirect(`${systemConfig.prefixAdmin}/role`);
};

// [DELETE] /admin/role/delete/:RoleID
module.exports.deleteItem = async (req, res) => {
  const RoleID = req.params.RoleID;

  await Role.updateOne(
    { _id: RoleID },
    {
      RoleDeleted: 0,
      deletedAt: new Date(),
    }
  );
  console.log("Xoá thành công!!")
  res.json({
    code: 200,
    message: "Xoá thành công!!"
  })

  // req.flash("success", "Xóa thành công!");
  // res.redirect(`${systemConfig.prefixAdmin}/role`);
};

// [GET] /admin/role/edit/:RoleID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      RoleDeleted: 1,
      _id: req.params.RoleID,
    };

    const roles = await Role.findOne(find);

    res.render("admin/pages/role/edit", {
      pageTitle: "Chỉnh sửa khoá học",
      roles: roles,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy nhóm quyền!");
    res.redirect(`${systemConfig.prefixAdmin}/role`);
  }
};
// [POST] /admin/role/edit/:RoleID
module.exports.editPatch = async (req, res) => {
  try {
    // console.log(req.body.role.permissions)
    await Role.updateOne(
      {
        _id: req.params.RoleID,
      }, {
      $set: { RolePermissions: req.body.role.permissions }
    });

    res.json({
      code: 200,
      message: "Cập nhật thành công!"
    })
    // req.flash("success", "Cập nhật thành công!");
  } catch (error) {
    console.log(error)
    res.json({
      code: 200,
      message: "Cập nhật thất bại!"
    })
  }

  // res.redirect(`${systemConfig.prefixAdmin}/role`);
};

// [GET] /admin/role/permission
module.exports.permission = async (req, res) => {
  let find = {
    RoleDeleted: 1,
  };
  const roles = await Role.find(find);
  res.json(roles)
  // res.render("admin/pages/role/permission", {
  //   pageTitle: "Phân quyền",
  //   roles: roles,
  // });
};
// [PATCH] /admin/role/permission
module.exports.permissionPatch = async (req, res) => {
  const permission = JSON.parse(req.body.permission);

  for (const item of permission) {
    await Role.updateOne(
      {
        _id: item.id,
      },
      {
        RolePermissions: item.permissions,
      }
    );
  }
  req.flash("success", "Cập nhật thành công!");
  res.redirect("back");
};
