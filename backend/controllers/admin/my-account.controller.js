const Video = require("../../models/video.model");
const Lesson = require("../../models/lesson.model");
const Admin = require("../../models/admin.model");
const Role = require("../../models/role.model");
const systemConfig = require("../../config/system");

// [GET] /admin/my-account
module.exports.index = async (req, res) => {
  try {
    // Kiểm tra user từ res.locals
    if (!res.locals.user || !res.locals.user._id) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    // Lấy thông tin user
    const user = await Admin.findOne({ _id: res.locals.user._id })
      .select("-AdminPassword -AdminToken")
      .lean();

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Lấy vai trò
    const role = await Role.findOne({
      _id: user.AdminRole_id,
      RoleDeleted: 1, // Chỉ lấy role còn hoạt động
    }).select("RoleName");

    // Gắn role vào user
    user.role = role ? role.RoleName : "Chưa có vai trò";

    // Gửi dữ liệu về client
    res.json(user);
  } catch (err) {
    console.error("Error fetching user account:", err);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// [GET] /admin/my-account/edit
module.exports.editItem = async (req, res) => {
  res.render("admin/pages/my-account/edit", {
    pageTitle: "Chỉnh sửa trang cá nhân",
  });
};

// [POST] /admin/my-account/edit
module.exports.editPost = async (req, res) => {
  try {
    console.log(req.body)
    const { editedBy, ...updateFields } = req.body;
    const newEditedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    await Admin.updateOne(
      { _id: res.locals.user.id },
      {
        ...updateFields,
        $push: { editedBy: newEditedBy },
      }
    );

    // req.flash("success", "Cập nhật thành công!");
    res.json({
      code: 200,
      message: "Cập nhật thành công!"
    })
  } catch (error) {
    console.log(error)
    // req.flash("error", "Cập nhật thất bại!");
    res.json({
      code: 400,
      message: "Cập nhật thất bại!"
    })
  }
  // res.redirect(`${systemConfig.prefixAdmin}/my-account`);
};

// // [DELETE] /admin/my-account/delete/:VideoID
// module.exports.deleteItem = async (req, res) => {
//   const videoID = req.params.VideoID;

//   await Lesson.updateOne(
//     { _id: videoID },
//     {
//       VideoDeleted: 0,
//       deletedBy: {
//         UserId: res.locals.user.id,
//         deletedAt: new Date(),
//       },
//     }
//   );

//   req.flash("success", "Xóa thành công!");
//   res.redirect("back");
// };

