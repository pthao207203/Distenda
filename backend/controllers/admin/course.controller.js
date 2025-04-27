const Course = require("../../models/course.model");
const Category = require("../../models/category.model");
const Admin = require("../../models/admin.model");
const Lesson = require("../../models/lesson.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// [GET] /admin/courses
module.exports.index = async (req, res) => {
  let find = {
    CourseDeleted: 1,
  };

  // Bộ lọc
  if (req.query.status == "active") {
    find.CourseStatus = 1;
  } else if (req.query.status == "inactive") {
    find.CourseStatus = 0;
  }

  // Tìm kiếm
  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const regex = new RegExp(keyword, "i");
    find.CourseName = regex;
  }

  // Phân trang
  const countCourses = await Course.countDocuments(find);
  let objectPagination = paginationHelper(
    {
      currentPage: 1,
      // limitItems: 10,
    },
    req.query,
    countCourses
  );

  const courses = await Course.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.skip)
    .lean();

  for (const course of courses) {
    const intructor = await Admin.findOne({
      _id: course.CourseIntructor,
    });

    if (intructor) {
      course.intructorFullName = intructor.AdminFullName;
    }
  }

  res.json(courses);
  // res.render("admin/pages/course/index", {
  //   pageTitle: "Trang khoá học",
  //   courses: courses,
  //   keyword: keyword,
  //   pagination: objectPagination,
  // });
};

// [POST] /admin/courses/change-status/:status/:CourseID
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const courseID = req.params.CourseID;
  const oldCourse = await Course.findOne({ _id: courseID }).lean();
  const admin = await Admin.findById(res.locals.user.id);
  const editedBy = {
    UserId: res.locals.user.id,
    editedAt: new Date(),
  };
  try {
    await Course.updateOne(
      { _id: courseID },
      {
        CourseStatus: status == "active" ? 1 : 0,
        $push: { editedBy: editedBy },
      }
    );

    res.json({
      code: 200,
      message: "Cập nhật trạng thái thành công",
    });
  } catch {
    res.json({
      code: 400,
      message: "Cập nhật trạng thái không thành công",
    });
  }

  // req.flash("success", "Cập nhật trạng thái thành công");

  // res.redirect("back");
};

// [DELETE] /admin/courses/delete/:CourseID
module.exports.deleteItem = async (req, res) => {
  const courseID = req.params.CourseID;
  const admin = await Admin.findById(res.locals.user.id);
  console.log(res.locals.user.id);
  const deletedCourse = await Course.findOne({ _id: courseID });
  await Course.updateOne(
    { _id: courseID },
    {
      CourseDeleted: 0,
      deletedBy: {
        UserId: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );

  req.flash("success", "Xóa thành công!");
  res.redirect(`${systemConfig.prefixAdmin}/courses`);
};

// [GET] /admin/courses/create
module.exports.createItem = async (req, res) => {
  const listCategory = await Category.find({
    CategoryDeleted: 1,
  });
  const newList = createTreeHelper.tree(listCategory);

  const intructor = await Admin.find({
    AdminDeleted: 1,
  });
  res.json({
    categories: listCategory,
    intructors: intructor,
  });
  // res.render("admin/pages/course/create", {
  //   pageTitle: "Thêm khoá học",
  //   listCategory: newList,
  //   intructor: intructor,
  // });
};

// [POST] /admin/courses/create
module.exports.createPost = async (req, res) => {
  // Parse các trường giá trị
  req.body.CoursePrice = parseInt(req.body.CoursePrice);
  req.body.CourseDuration = parseInt(req.body.CourseDuration);
  req.body.CourseDiscount = req.body.CourseDiscount ? parseInt(req.body.CourseDiscount) : 0;

  // Đặt thông tin người tạo
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };

  const course = new Course(req.body);

  // Lưu khóa học mới vào cơ sở dữ liệu
  await course.save();

  res.json({
    code: 200,
    message: "Tạo khoá học thành công!",
  });
};


// [GET] /admin/courses/detail/:CourseID
module.exports.detailItem = async (req, res) => {
  try {
    const find = {
      CourseDeleted: 1,
      _id: req.params.CourseID,
    };

    const course = await Course.findOne(find).lean();
    const categories = await Category.find().lean();
    course.categories = categories;
    const intructors = await Admin.find().lean();
    course.intructors = intructors;

    if (course.CourseCatogory && course.CourseCatogory != "") {
      const category = await Category.findOne({
        CategoryDeleted: 1,
        _id: course.CourseCatogory,
      });
      course.category = category;
    }

    if (course.CourseIntructor && course.CourseIntructor != "") {
      const intructor = await Admin.findOne({
        AdminDeleted: 1,
        _id: course.CourseIntructor,
      });
      course.intructor = intructor;
    }

    const count = await Lesson.countDocuments({
      CourseId: req.params.CourseID,
    });
    if (count > 0) {
      const lesson = await Lesson.find({
        CourseId: req.params.CourseID,
        LessonDeleted: 1,
      });
      course.lesson = lesson;
    }
    res.json(course);
    // res.render("admin/pages/course/detail", {
    //   pageTitle: course.CourseName,
    //   course: course,
    // });
  } catch (error) {
    console.log(error);
    // req.flash("error", "Không tìm thấy sản phẩm!");
    // res.redirect(`${systemConfig.prefixAdmin}/courses`);
  }
};

// [GET] /admin/courses/edit/:CourseID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      CourseDeleted: 1,
      _id: req.params.CourseID,
    };
    const course = await Course.findOne(find);

    const listCategory = await Category.find({
      CategoryDeleted: 1,
    });
    const newList = createTreeHelper.tree(listCategory);

    const intructor = await Admin.find({
      AdminDeleted: 1,
    });
    // console.log(course)
    res.json(course);
    // res.render("admin/pages/course/edit", {
    //   pageTitle: "Chỉnh sửa khoá học",
    //   course: course,
    //   listCategory: newList,
    //   intructor: intructor,
    // });
  } catch (error) {
    res.json({
      code: 200,
      message: error,
    });
    // req.flash("error", "Không tìm thấy khoá học!");
    // res.redirect(`${systemConfig.prefixAdmin}/courses`);
  }
};

// [POST] /admin/courses/edit/:CourseID
module.exports.editPost = async (req, res) => {
  const { editedBy, ...updateFields } = req.body;
  updateFields.CoursePrice = parseInt(updateFields.CoursePrice);
  updateFields.CourseDuration = parseInt(updateFields.CourseDuration);
  updateFields.CourseDiscount = updateFields.CourseDiscount ? parseInt(updateFields.CourseDiscount) : 0;


  if (req.file) {
    updateFields.CoursePicture = `/uploads/${req.file.filename}`;
  }

  const oldCourse = await Course.findOne({ _id: req.params.CourseID }).lean();

  try {
    const newEditedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };

    await Course.updateOne(
      { _id: req.params.CourseID },
      {
        ...updateFields,
        $push: { editedBy: newEditedBy },
      }
    );

    if (updateFields.lesson) {
      for (const item of updateFields.lesson) {
        if (item.change == 1) {
          const { editedBy, ...updateFields } = item;
          await Lesson.updateOne(
            { _id: item._id },
            {
              ...updateFields,
              $push: { editedBy: newEditedBy },
            }
          );
        }
      }
    }
    
    res.json({
      code: 200,
      message: "Cập nhật thành công!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      code: 400,
      message: "Cập nhật thất bại!",
    });
  }
};

// module.exports.updateAllCourseProfit = async (req, res) => {
//   try {
//     // Lấy tất cả các khóa học
//     const courses = await Course.find();

//     let count = 0;

//     for (const course of courses) {
//       // Lấy các giá trị từ khóa học
//       const price = course.CoursePrice || 0;
//       const discount = course.CourseDiscount || 0;
//       const salary = course.CourseSalary || 0;

//       // Công thức tính CourseProfit
//       const courseProfit = (price * (1 - discount / 100)) - (price * (salary / 100));

//       // Cập nhật CourseProfit cho khóa học
//       course.CourseProfit = courseProfit;

//       // Lưu lại khóa học đã cập nhật
//       await course.save();
//       count++;
//     }

//     // Trả về thông báo sau khi cập nhật tất cả
//     res.json({
//       code: 200,
//       message: `Đã cập nhật ${count} khóa học thành công!`,
//     });
//   } catch (err) {
//     console.error("❌ Lỗi khi cập nhật khóa học: ", err);
//     res.status(500).send("Lỗi khi cập nhật dữ liệu khóa học!");
//   }
// };

