const md5 = require("md5");
const User = require("../../models/user.model");
const Role = require("../../models/role.model");
const Course = require("../../models/course.model");
const systemConfig = require("../../config/system");
const generateHelper = require("../../helpers/generate");

// [GET] /admin/user
module.exports.index = async (req, res) => {
  let find = {
    UserDeleted: 1,
  };

  const users = await User.find(find).select("-UserPassword -UserToken").sort({ createdAt: -1 });;

  res.json(users)
  // res.render("admin/pages/admin/index", {
  //   pageTitle: "Danh sách tài khoản",
  //   admin: user,
  // });
};

// [GET] /admin/user/detail/:UserID
module.exports.detail = async (req, res) => {
  const find = {
    UserDeleted: 1,
    _id: req.params.UserID,
  };

  const user = await User.findOne(find).lean();
  for (const courseUser of user.UserCourse) {
    const course = await Course.findOne({
      _id: courseUser.CourseId,
    });

    if (course) {
      courseUser.course = course;
    }
  }
  console.log(user)
  res.json(user)
  // res.render("admin/pages/admin/index", {
  //   pageTitle: "Danh sách tài khoản",
  //   admin: user,
  // });
};

// [GET] /admin/user/create
module.exports.createItem = async (req, res) => {
  const role = await Role.find({ RoleDeleted: 1 });

  res.render("admin/pages/user/create", {
    pageTitle: "Thêm tài khoản",
    roles: role,
  });
};

// [POST] /admin/user/create
module.exports.createPost = async (req, res) => {
  req.body.UserStatus = req.body.UserStatus == "active" ? 1 : 0;
  req.body.UserPassword = md5(req.body.UserPassword);
  req.body.UserToken = generateHelper.generateRandomString(30);
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };

  const user = new User(req.body);
  await user.save();
  req.flash("success", "Thêm tài khoản user thành công!");
  res.redirect(`${systemConfig.prefixAdmin}/user`);
};

// [POST] /admin/user/change-status/:status/:UserID
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const UserID = req.params.UserID;

  await User.updateOne({ _id: UserID }, { UserStatus: status == "active" ? 1 : 0 })

  res.json({
    code: 200,
    message: "Cập nhật thành công!"
  })

  // req.flash('success', 'Cập nhật trạng thái thành công');
  // res.redirect('back')
}

// [DELETE] /admin/user/delete/:UserID
module.exports.deleteItem = async (req, res) => {
  const UserID = req.params.UserID;

  await User.updateOne(
    { _id: UserID },
    {
      UserDeleted: 0,
      deletedBy: {
        UserId: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );

  req.flash("success", "Xóa thành công!");
  res.redirect(`${systemConfig.prefixAdmin}/user`);
};

// [GET] /admin/user/edit/:UserID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      UserDeleted: 1,
      _id: req.params.UserID,
    };

    const listRole = await Role.find({
      RoleDeleted: 1,
    });

    const user = await User.findOne(find);

    res.render("admin/pages/user/edit", {
      pageTitle: "Chỉnh sửa khoá học",
      user: user,
      listRole: listRole,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy tài khoản!");
    res.redirect(`${systemConfig.prefixAdmin}/user`);
  }
};

// [PATCH] /admin/user/edit/:UserID
module.exports.editPatch = async (req, res) => {
  req.body.UserStatus = req.body.UserStatus == "active" ? 1 : 0;

  try {
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    await User.updateOne(
      {
        _id: req.params.UserID,
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

  res.redirect(`${systemConfig.prefixAdmin}/user`);
};
