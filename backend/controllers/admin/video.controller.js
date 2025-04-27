const Video = require("../../models/video.model");
const Lesson = require("../../models/lesson.model");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");
const createTreeHelper = require("../../helpers/createTree");

// [DELETE] /admin/video/delete/:VideoID
module.exports.deleteItem = async (req, res) => {
  const videoID = req.params.VideoID;

  await Video.updateOne(
    { _id: videoID },
    {
      VideoDeleted: 0,
      deletedBy: {
        UserId: res.locals.user.id,
        deletedAt: new Date(),
      },
    }
  );
  res.json({
    code: 200,
    message: "Xóa thành công!"
  })
  // req.flash("success", "Xóa thành công!");
  // res.redirect("back");
};

// [GET] /admin/video/create/:LessonID
module.exports.createItem = async (req, res) => {
  const id = req.params.LessonID;
  const lesson = await Lesson.findOne({
    _id: id,
    LessonDeleted: 1,
  });

  res.render("admin/pages/video/create", {
    pageTitle: "Thêm bài học",
    lesson: lesson,
  });
};

// [POST] /admin/video/create/:LessonID
module.exports.createPost = async (req, res) => {
  req.body.createdBy = {
    UserId: res.locals.user.id,
  };
  req.body.LessonId = req.params.LessonID;
  const count = await Video.countDocuments({
    LessonId: req.params.LessonID,
  });
  req.body.VideoPosition = count + 1;

  const video = new Video(req.body);

  await video.save();
  res.json({
    code: 200,
    message: "Thêm chương học thành công!"
  })
  // res.redirect(
  //   `${systemConfig.prefixAdmin}/lesson/detail/${req.params.LessonID}`
  // );
};

// [GET] /admin/video/edit/:VideoID
module.exports.editItem = async (req, res) => {
  try {
    const find = {
      VideoDeleted: 1,
      _id: req.params.VideoID,
    };
    const video = await Video.findOne(find);

    const lesson = await Lesson.findOne({
      _id: video.LessonId,
    });
    video.lesson = lesson;

    res.render("admin/pages/video/edit", {
      pageTitle: "Chỉnh sửa chương học",
      video: video,
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy chương học!");
    res.redirect("back");
  }
};

// [POST] /admin/video/edit/:VideoID
module.exports.editPost = async (req, res) => {
  try {
    const { editedBy, ...updateFields } = req.body;
    const newEditedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    // console.log(req.body);
    await Video.updateOne(
      { _id: req.params.VideoID },
      {
        ...updateFields,
        $push: { editedBy: newEditedBy },
      }
    );
    res.json({
      code: 200,
      message: "Cập nhật bài học thành công!"
    })
    // req.flash("success", "Cập nhật thành công!");
  } catch (error) {
    res.json({
      code: 400,
      message: "Cập nhật bài học thất bại!"
    })
    console.log(error)
    // req.flash("error", "Cập nhật thất bại!");
  }
  // const find = {
  //   VideoDeleted: 1,
  //   _id: req.params.VideoID,
  // };
  // const video = await Video.findOne(find);
  // res.redirect(`${systemConfig.prefixAdmin}/lesson/detail/${video.LessonId}`);
};

// [GET] /admin/video/detail/:VideoID
module.exports.detailItem = async (req, res) => {
  try {
    const find = {
      VideoDeleted: 1,
      _id: req.params.VideoID,
    };

    const video = await Video.findOne(find);

    const lesson = await Lesson.findOne({
      _id: video.LessonId,
      LessonDeleted: 1,
    });
    video.lesson = lesson;

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
    res.json(video)
    // res.render("admin/pages/video/detail", {
    //   pageTitle: video.VideoName,
    //   video: video,
    // });
  } catch (error) {
    console.log(error)
    res.json({
      code: 400,
      message: "Không tìm thấy sản phẩm!"
    })
    // req.flash("error", "Không tìm thấy sản phẩm!");
    // res.redirect(`${systemConfig.prefixAdmin}/courses`);
  }
};
