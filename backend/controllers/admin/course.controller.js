const Course = require("../../models/course.model");
const Category = require("../../models/category.model");
const Admin = require("../../models/admin.model");
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
      limitItems: 5,
    },
    req.query,
    countCourses
  );

  const courses = await Course.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.skip);

  for (const course of courses) {
    const intructor = await Admin.findOne({
      _id: course.createdBy.UserId,
    });

    if (intructor) {
      course.intructorFullName = intructor.AdminFullName;
    }
  }

  res.render("admin/pages/course/index", {
    pageTitle: "Trang khoá học",
    courses: courses,
    keyword: keyword,
    pagination: objectPagination,
  });
};

// [PATCH] /admin/courses/change-status/:status/:CourseID
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const courseID = req.params.CourseID;

  const editedBy = {
    UserId: res.locals.user.id,
    editedAt: new Date(),
  };

  await Course.updateOne(
    { _id: courseID },
    {
      CourseStatus: status == "active" ? 1 : 0,
      $push: { editedBy: editedBy },
    }
  );

  req.flash("success", "Cập nhật trạng thái thành công");

  res.redirect("back");
};

// [DELETE] /admin/courses/delete/:CourseID
module.exports.deleteItem = async (req, res) => {
  const courseID = req.params.CourseID;
  console.log(res.locals.user.id);

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
  res.render("admin/pages/course/create", {
    pageTitle: "Thêm khoá học",
    listCategory: newList,
    intructor: intructor,
  });
};

// [POST] /admin/courses/create
module.exports.createPost = async (req, res) => {
  req.body.CoursePrice = parseInt(req.body.CoursePrice);
  req.body.CourseDiscount = req.body.CourseDiscount
    ? parseInt(req.body.CourseDiscount)
    : 0;
  req.body.CourseStatus = req.body.CourseStatus == "active" ? 1 : 0;
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };
  const course = new Course(req.body);
  await course.save();

  res.redirect(`${systemConfig.prefixAdmin}/courses`);
};

// [GET] /admin/courses/detail/:CourseID
module.exports.detailItem = async (req, res) => {
  try {
    const find = {
      CourseDeleted: 1,
      _id: req.params.CourseID,
    };

    const course = await Course.findOne(find);

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

    res.render("admin/pages/course/detail", {
      pageTitle: course.CourseName,
      course: course,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy sản phẩm!");
    res.redirect(`${systemConfig.prefixAdmin}/courses`);
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

    res.render("admin/pages/course/edit", {
      pageTitle: "Chỉnh sửa khoá học",
      course: course,
      listCategory: newList,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy khoá học!");
    res.redirect(`${systemConfig.prefixAdmin}/courses`);
  }
};

// [PATCH] /admin/courses/edit/:CourseID
module.exports.editPatch = async (req, res) => {
  req.body.CoursePrice = parseInt(req.body.CoursePrice);
  req.body.CourseDiscount = req.body.CourseDiscount
    ? parseInt(req.body.CourseDiscount)
    : 0;
  req.body.CourseStatus = req.body.CourseStatus == "active" ? 1 : 0;

  if (req.file) {
    req.body.CoursePicture = `/uploads/${req.file.filename}`;
  }

  try {
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    await Course.updateOne(
      { _id: req.params.CourseID },
      {
        ...req.body,
        $push: { editedBy: editedBy },
      }
    );

    req.flash("success", "Cập nhật thành công!");
  } catch (error) {
    req.flash("error", "Cập nhật thất bại!");
  }

  res.redirect(`${systemConfig.prefixAdmin}/courses/detail/${req.params.id}`);
};
