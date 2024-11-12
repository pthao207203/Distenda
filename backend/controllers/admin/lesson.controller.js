const Course = require("../../models/course.model");
const Lesson = require("../../models/lesson.model");
const Admin = require("../../models/admin.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// // [DELETE] /admin/lesson/delete/:CourseID
// module.exports.deleteItem = async (req, res) => {
//   const courseID = req.params.CourseID;
//   console.log(res.locals.user.id);

//   await Course.updateOne(
//     { _id: courseID },
//     {
//       CourseDeleted: 0,
//       deletedBy: {
//         UserId: res.locals.user.id,
//         deletedAt: new Date(),
//       },
//     }
//   );

//   req.flash("success", "Xóa thành công!");
//   res.redirect(`${systemConfig.prefixAdmin}/courses`);
// };

// [GET] /admin/lesson/create/:CourseID
module.exports.createItem = async (req, res) => {
  const id = req.params.CourseID;
  const course = await Course.findOne({
    _id: id,
    CourseDeleted: 1,
  });

  res.render("admin/pages/lesson/create", {
    pageTitle: "Thêm chương học",
    course: course,
  });
};

// [POST] /admin/lesson/create/:CourseID
module.exports.createPost = async (req, res) => {
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };
  req.body.CourseId = req.params.CourseID;
  const count = await Lesson.countDocuments({
    CourseId: req.params.CourseID,
  });
  req.body.LessonPosition = count + 1;

  const lesson = new Lesson(req.body);

  await lesson.save();

  res.redirect(
    `${systemConfig.prefixAdmin}/courses/detail/${req.params.CourseID}`
  );
};

// [GET] /admin/lesson/edit/:LessonID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      LessonDeleted: 1,
      _id: req.params.LessonID,
    };
    const lesson = await Lesson.findOne(find);

    const course = await Course.findOne({
      _id: lesson.CourseId,
    });
    lesson.course = course;

    res.render("admin/pages/lesson/edit", {
      pageTitle: "Chỉnh sửa chương học",
      lesson: lesson,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy chương học!");
    res.redirect("back");
  }
};

// [PATCH] /admin/lesson/edit/:LessonID
module.exports.editPatch = async (req, res) => {
  try {
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    // console.log(req.body);
    await Lesson.updateOne(
      { _id: req.params.LessonID },
      {
        ...req.body,
        $push: { editedBy: editedBy },
      }
    );

    req.flash("success", "Cập nhật thành công!");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại!");
  }
  const find = {
    LessonDeleted: 1,
    _id: req.params.LessonID,
  };
  const lesson = await Lesson.findOne(find);
  res.redirect(`${systemConfig.prefixAdmin}/courses/detail/${lesson.CourseId}`);
};
