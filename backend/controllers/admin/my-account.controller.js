const Video = require("../../models/video.model");
const Lesson = require("../../models/lesson.model");
const Admin = require("../../models/admin.model");
const systemConfig = require("../../config/system");

// [GET] /admin/my-account
module.exports.index = async (req, res) => {
  res.json({
    user: res.locals.user,
  })
  // res.render("admin/pages/my-account/index", {
  //   pageTitle: "Trang cá nhân",
  // });
};

// [GET] /admin/my-account/edit
module.exports.editItem = async (req, res) => {
  res.render("admin/pages/my-account/edit", {
    pageTitle: "Chỉnh sửa trang cá nhân",
  });
};

// [PATCH] /admin/my-account/edit
module.exports.editPatch = async (req, res) => {
  try {
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    // console.log(req.body);
    await Admin.updateOne(
      { _id: res.locals.user.id },
      {
        ...req.body,
        $push: { editedBy: editedBy },
      }
    );

    req.flash("success", "Cập nhật thành công!");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại!");
  }
  res.redirect(`${systemConfig.prefixAdmin}/my-account`);
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

