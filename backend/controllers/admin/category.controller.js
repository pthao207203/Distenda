const Category = require("../../models/category.model");
const Course = require("../../models/course.model");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// [GET] /admin/category
module.exports.index = async (req, res) => {
  let find = {
    CategoryDeleted: 1,
    CategoryStatus: 1,
  };

  const categories = await Category.find(find).lean();
  for (const item of categories) {
    const count = await Course.countDocuments({
      CourseDeleted: 1,
      CourseCatogory: item._id
    });
    item.count = count
  }

  const newList = createTreeHelper.tree(categories);

  // console.log(newList)
  res.json(newList)
  // res.render("admin/pages/category/index", {
  //   pageTitle: "Danh mục khoá học",
  //   categories: newList,
  // });
};

// [GET] /admin/ategory/create
module.exports.createItem = async (req, res) => {
  let find = {
    CategoryDeleted: 1,
  };

  const listCategory = await Category.find(find);

  const newList = createTreeHelper.tree(listCategory);

  res.render("admin/pages/category/create", {
    pageTitle: "Thêm danh mục khoá học",
    listCategory: newList,
  });
};

// [POST] /admin/category/create
module.exports.createPost = async (req, res) => {
  console.log(req.body);
  // req.body.CategoryStatus = req.body.CategoryStatus == "active" ? 1 : 0;

  if (!req.body.CategoryPosition) {
    const count = await Category.countDocuments();
    req.body.CategoryPosition = count + 1;
  } else {
    req.body.CategoryPosition = parseInt(req.body.CategoryPosition);
  }
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };

  const category = new Category(req.body);
  await category.save();
  res.json({
    code: 200,
    message: "Thêm phân loại thành công!"
  })
  // res.redirect(`${systemConfig.prefixAdmin}/category`);
};

// [PATCH] /admin/category/change-status/:status/:CategoryID
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const CategoryID = req.params.CategoryID;

  await Category.updateOne(
    { _id: CategoryID },
    {
      CategoryStatus: status == "active" ? 1 : 0,
      deletedBy: {
        UserId: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );

  req.flash("success", "Cập nhật trạng thái thành công");

  res.redirect("back");
};

// [DELETE] /admin/category/delete/:CategoryID
module.exports.deleteItem = async (req, res) => {
  const CategoryID = req.params.CategoryID;

  await Category.updateOne(
    { _id: CategoryID },
    {
      CategoryDeleted: 0,
      deletedAt: new Date(),
    }
  );

  req.flash("success", "Xóa thành công!");
  res.redirect(`${systemConfig.prefixAdmin}/category`);
};

// [GET] /admin/category/edit/:CategoryID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      CategoryDeleted: 1,
      _id: req.params.CategoryID,
    };

    const listCategory = await Category.find({
      CategoryDeleted: 1,
    });

    const newList = createTreeHelper.tree(listCategory);

    const category = await Category.findOne(find);

    res.render("admin/pages/category/edit", {
      pageTitle: "Chỉnh sửa khoá học",
      category: category,
      listCategory: newList,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy danh mục!");
    res.redirect(`${systemConfig.prefixAdmin}/category`);
  }
};

// [PATCH] /admin/category/edit/:CategoryID
module.exports.editPatch = async (req, res) => {
  req.body.CategoryStatus = req.body.CategoryStatus == "active" ? 1 : 0;
  req.body.CategoryPosition = parseInt(req.body.CategoryPosition);

  try {
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    await Category.updateOne(
      {
        _id: req.params.CategoryID,
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

  res.redirect(`${systemConfig.prefixAdmin}/category`);
};
