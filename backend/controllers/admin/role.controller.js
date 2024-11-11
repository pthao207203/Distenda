const Role = require("../../models/role.model")
const systemConfig = require("../../config/system");

// [GET] /admin/role
module.exports.index = async (req, res) => {
  let find = {
    RoleDeleted: 1
  }

  const role = await Role.find(find)

  res.render('admin/pages/role/index', {
    pageTitle: "Danh mục nhóm quyền",
    role: role,
  });
}

// [GET] /admin/role/create
module.exports.createItem = async (req, res) => {
  let find = {
    RoleDeleted: 1
  };

  const role = await Role.find(find);

  res.render('admin/pages/role/create', {
    pageTitle: "Thêm nhóm quyền",
    role: role,
  });
}
// [POST] /admin/role/create
module.exports.createPost = async (req, res) => {
  console.log(req.body)
  req.body.CategoryStatus = req.body.CategoryStatus == "active"?1:0;

  if (req.body.CategoryPosition == "") {
    const count = await Category.countDocuments();
    req.body.CategoryPosition = count + 1;
  } else {
    req.body.CategoryPosition = parseInt(req.body.CategoryPosition);
  }

  const category = new Category(req.body);
  await category.save();

  res.redirect(`${systemConfig.prefixAdmin}/category`)
}

// [DELETE] /admin/role/delete/:RoleID
module.exports.deleteItem = async (req, res) => {
  const RoleID = req.params.RoleID;

  await Role.updateOne({ _id: RoleID}, {
    RoleDeleted: 0,
    deletedAt: new Date()
  })

  req.flash('success', 'Xóa thành công!');
  res.redirect(`${systemConfig.prefixAdmin}/role`)
}


// [GET] /admin/role/edit/:RoleID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      RoleDeleted: 1,
      _id: req.params.RoleID
    }

    const role = await Role.findOne(find);
    
    res.render('admin/pages/role/edit', {
      pageTitle: "Chỉnh sửa khoá học",
      role: role,
    });
  } catch (error){
    req.flash("error", "Không tìm thấy nhóm quyền!");
    res.redirect(`${systemConfig.prefixAdmin}/role`);
  }
}
// [PATCH] /admin/role/edit/:RoleID
module.exports.editPatch = async (req, res) => {

  try {
    await Role.updateOne({
      _id: req.params.RoleID
    }, req.body)

    req.flash("success", "Cập nhật thành công!")
  } catch (error) {
    req.flash("error", "Cập nhật thất bại!")
  }

  res.redirect(`${systemConfig.prefixAdmin}/role`)
}

// [GET] /admin/role/permission
module.exports.permission = async (req, res) => {
  let find = {
    RoleDeleted: 1
  }
  const role = await Role.find(find)
  res.render('admin/pages/role/permission', {
    pageTitle: "Phân quyền",
    roles: role,
  });
}
// [PATCH] /admin/role/permission
module.exports.permissionPatch = async (req, res) => {
  const permission = JSON.parse(req.body.permission)

  for (const item of permission){
    await Role.updateOne({
      _id: item.id
    }, {
      RolePermissions: item.permissions
    })
  }
  req.flash("success", "Cập nhật thành công!")
  res.redirect("back")
}