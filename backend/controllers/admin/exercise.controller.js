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

// [POST] /admin/exercise/edit/:LessonID
module.exports.editPost = async (req, res) => {
  try {
    const exercise = await Exercise.findOne({
      LessonId: req.params.LessonID
    })
    if (exercise) {
      const { editedBy, ...updateFields } = req.body.exercise;
      const newEditedBy = {
        UserId: res.locals.user.id,
        editedAt: new Date(),
      };
      console.log(updateFields);
      await Exercise.updateOne(
        { LessonId: req.params.LessonID },
        {
          ...updateFields,
          $push: { editedBy: newEditedBy },
        }
      );
    } else {
      // req.body.exercise.createdBy = {
      //   UserId: res.locals.user.id,
      // };
      console.log(req.body)
      const exer = new Exercise({
        ...req.body.exercise,
        "createdBy.UserId": res.locals.user.id
      })
      await exer.save()
    }
    res.json({
      code: 200,
      message: "Cập nhật thành công!"
    })
    // req.flash("success", "Cập nhật thành công!");
  } catch (error) {
    console.log(error)
    res.json({
      code: 400,
      message: "Cập nhật thất bại!"
    })
    // req.flash("error", "Cập nhật thất bại!");
  }
  // const find = {
  //   ExerciseDeleted: 1,
  //   _id: req.params.ExerciseID,
  // };
  // const exer = await Exercise.findOne(find);
  // res.redirect(`${systemConfig.prefixAdmin}/lesson/detail/${exer.LessonId}`);
};

// [GET] /admin/exercise/detail/:LessonID
module.exports.detailItem = async (req, res) => {
  try {
    console.log(req.params.LessonID)
    const find = {
      ExerciseDeleted: 1,
      LessonId: req.params.LessonID,
    };

    const exer = await Exercise.findOne(find);
    console.log(exer)
    const lesson = await Lesson.findOne({
      _id: req.params.LessonID,
      LessonDeleted: 1,
    }).lean();
    lesson.exercise = exer ? exer : {
      LessonId: req.params.LessonID,
      ExerciseName: "",
      ExerciseQuestion: "",
      ExerciseSample: "",
      ExerciseAnswer: "",
    };
    res.json(lesson)

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

    // res.render("admin/pages/exercise/detail", {
    //   pageTitle: exer.ExerciseName,
    //   exer: exer,
    // });
  } catch (error) {
    req.flash("error", "Không tìm thấy sản phẩm!");
    res.redirect(`${systemConfig.prefixAdmin}/courses`);
  }
};
