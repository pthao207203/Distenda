const Exercise = require("../../models/exercise.model");
const Lesson = require("../../models/lesson.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// [DELETE] /admin/exercise/delete/:ExerciseID
module.exports.deleteItem = async (req, res) => {
  const exerID = req.params.ExerciseID;

  await Lesson.updateOne(
    { _id: exerID },
    {
      ExerciseDeleted: 0,
      deletedBy: {
        UserId: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );

  req.flash("success", "Xóa thành công!");
  res.redirect("back");
};

// [GET] /admin/exercise/create/:LessonID
module.exports.createItem = async (req, res) => {
  const id = req.params.LessonID;
  const lesson = await Lesson.findOne({
    _id: id,
    LessonDeleted: 1,
  });

  res.render("admin/pages/exercise/create", {
    pageTitle: "Thêm bài tập",
    lesson: lesson,
  });
};

// [POST] /admin/exercise/create/:LessonID
module.exports.createPost = async (req, res) => {
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };
  req.body.LessonId = req.params.LessonID;
  const count = await Exercise.countDocuments({
    LessonId: req.params.LessonID,
  });

  const exer = new Exercise(req.body);

  await exer.save();

  res.redirect(
    `${systemConfig.prefixAdmin}/lesson/detail/${req.params.LessonID}`
  );
};

// [GET] /admin/exercise/edit/:ExerciseID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      ExerciseDeleted: 1,
      _id: req.params.ExerciseID,
    };
    const exer = await Exercise.findOne(find);

    const lesson = await Lesson.findOne({
      _id: exer.LessonId,
    });
    exer.lesson = lesson;

    res.render("admin/pages/exercise/edit", {
      pageTitle: "Chỉnh sửa chương học",
      exer: exer,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy chương học!");
    res.redirect("back");
  }
};

// [PATCH] /admin/exercise/edit/:ExerciseID
module.exports.editPatch = async (req, res) => {
  try {
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    // console.log(req.body);
    await Exercise.updateOne(
      { _id: req.params.ExerciseID },
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
    ExerciseDeleted: 1,
    _id: req.params.ExerciseID,
  };
  const exer = await Exercise.findOne(find);
  res.redirect(`${systemConfig.prefixAdmin}/lesson/detail/${exer.LessonId}`);
};

// [GET] /admin/exercise/detail/:ExerciseID
module.exports.detailItem = async (req, res) => {
  try {
    const find = {
      ExerciseDeleted: 1,
      _id: req.params.ExerciseID,
    };

    const exer = await Exercise.findOne(find);

    const lesson = await Lesson.findOne({
      _id: exer.LessonId,
      LessonDeleted: 1,
    });
    exer.lesson = lesson;

    // const count = await Lesson.countDocuments({
    //   CourseId: req.params.CourseID,
    // });
    // if (count > 0) {
    //   const lesson = await Lesson.find({
    //     CourseId: req.params.CourseID,
    //     LessonDeleted: 1,
    //   });
    //   course.lesson = lesson;
    // }

    res.render("admin/pages/exercise/detail", {
      pageTitle: exer.ExerciseName,
      exer: exer,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy sản phẩm!");
    res.redirect(`${systemConfig.prefixAdmin}/courses`);
  }
};
