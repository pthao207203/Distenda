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

// // [GET] /admin/lesson/detail/:CourseID
// module.exports.detailItem = async (req, res) => {
//   try {
//     const find = {
//       CourseDeleted: 1,
//       _id: req.params.CourseID,
//     };

//     const course = await Course.findOne(find);

//     if (course.CourseCatogory && course.CourseCatogory != "") {
//       const category = await Category.findOne({
//         CategoryDeleted: 1,
//         _id: course.CourseCatogory,
//       });
//       course.category = category;
//     }

//     if (course.CourseIntructor && course.CourseIntructor != "") {
//       const intructor = await Admin.findOne({
//         AdminDeleted: 1,
//         _id: course.CourseIntructor,
//       });
//       course.intructor = intructor;
//     }

//     res.render("admin/pages/course/detail", {
//       pageTitle: course.CourseName,
//       course: course,
//     });
//   } catch (error) {
//     req.flash("error", "Không tìm thấy sản phẩm!");
//     res.redirect(`${systemConfig.prefixAdmin}/courses`);
//   }
// };

// // [GET] /admin/lesson/edit/:CourseID
// module.exports.editItem = async (req, res) => {
//   try {
//     const find = {
//       CourseDeleted: 1,
//       _id: req.params.CourseID,
//     };
//     const course = await Course.findOne(find);

//     const listCategory = await Category.find({
//       CategoryDeleted: 1,
//     });
//     const newList = createTreeHelper.tree(listCategory);

//     const intructor = await Admin.find({
//       AdminDeleted: 1,
//     });

//     res.render("admin/pages/course/edit", {
//       pageTitle: "Chỉnh sửa khoá học",
//       course: course,
//       listCategory: newList,
//     });
//   } catch (error) {
//     req.flash("error", "Không tìm thấy khoá học!");
//     res.redirect(`${systemConfig.prefixAdmin}/courses`);
//   }
// };

// // [PATCH] /admin/lesson/edit/:CourseID
// module.exports.editPatch = async (req, res) => {
//   req.body.CoursePrice = parseInt(req.body.CoursePrice);
//   req.body.CourseDiscount = req.body.CourseDiscount
//     ? parseInt(req.body.CourseDiscount)
//     : 0;
//   req.body.CourseStatus = req.body.CourseStatus == "active" ? 1 : 0;

//   if (req.file) {
//     req.body.CoursePicture = `/uploads/${req.file.filename}`;
//   }

//   try {
//     const editedBy = {
//       UserId: res.locals.user.id,
//       editedAt: new Date(),
//     };
//     await Course.updateOne(
//       { _id: req.params.CourseID },
//       {
//         ...req.body,
//         $push: { editedBy: editedBy },
//       }
//     );

//     req.flash("success", "Cập nhật thành công!");
//   } catch (error) {
//     req.flash("error", "Cập nhật thất bại!");
//   }

//   res.redirect(`${systemConfig.prefixAdmin}/courses/detail/${req.params.id}`);
// };
