const User = require("../../models/user.model");
const Course = require("../../models/course.model");
const Video = require("../../models/video.model");
const md5 = require("md5");

// // [GET] /user/like/add/:CourseID
module.exports.addLike = async (req, res) => {
  if (req.cookies.user_token) {
    await User.updateOne(
      {
        _id: res.locals.user.id,
      },
      {
        $push: { UserLikes: req.params.CourseID },
      }
    );
    req.flash("success", "Thêm khoá học yêu thích thành công!");
    res.redirect("back");
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};

// // [GET] /user/like/cancel/:CourseID
module.exports.cancelLike = async (req, res) => {
  if (req.cookies.user_token) {
    await User.updateOne(
      {
        _id: res.locals.user.id,
      },
      {
        $pull: { UserLikes: req.params.CourseID },
      }
    );
    req.flash("success", "Xoá khoá học yêu thích thành công!");
    res.redirect("back");
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};

// // [GET] /user/pay/:CourseID
module.exports.pay = async (req, res) => {
  if (req.cookies.user_token) {
    const test = await User.findOne({
      _id: res.locals.user.id,
      "UserCourse.CourseId": req.params.CourseID,
    });
    console.log("test ", test);
    if (test) {
      const course = await Course.findOne({ _id: req.params.CourseID });
      req.flash("error", "Bạn đã mua khoá học!");
      res.redirect(`/courses/${course.CourseSlug}`);
      return;
    }
    const course = await Course.findOne({
      _id: req.params.CourseID,
    });
    console.log(course);
    res.render("client/pages/courses/pay", {
      pageTitle: "Thanh toán",
      course: course,
    });
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};

// // [POST] /user/pay/:CourseID
module.exports.payPost = async (req, res) => {
  if (req.cookies.user_token) {
    const test = await User.findOne({
      _id: res.locals.user.id,
      "UserCourse.CourseId": req.params.CourseID,
    });
    if (test) {
      const course = await Course.findOne({ _id: req.params.CourseID });
      req.flash("error", "Bạn đã mua khoá học!");
      res.redirect(`/courses/${course.CourseSlug}`);
      return;
    }
    const newCourse = {
      CourseId: req.params.CourseID,
      CourseStatus: 0, // Mặc định là 0
      CourseProcess: [], // Mặc định là một mảng rỗng
    };

    // Cập nhật thông tin người dùng
    await User.updateOne(
      {
        _id: res.locals.user.id,
      },
      {
        $push: { UserCourse: newCourse },
      }
    );
    console.log(res.locals.user);

    const course = await Course.findOne({ _id: req.params.CourseID });
    req.flash("success", "Thanh toán thành công");
    res.redirect(`/courses/detail/${course.CourseSlug}`);
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};

// // [GET] /user/profile
module.exports.profile = async (req, res) => {
  // res.render("client/pages/user/profile", {
  //   pageTitle: "Trang cá nhân",
  //   user: res.locals.user
  // });
  res.json(res.locals.user);
};

// // [GET] /user/profile/edit
module.exports.profileEdit = async (req, res) => {
  res.render("client/pages/user/edit", {
    pageTitle: "Trang cá nhân",
    user: res.locals.user,
  });
};

// [POST] /user/profile
module.exports.profilePost = async (req, res) => {
  try {
    // console.log(req.body)
    // const oldPassword = req.body
    if (req.body.currentPassword) {
      const user = await User.findOne({
        _id: req.body._id,
        UserPassword: req.body.currentPassword,
      });
      if (user) {
        res.json({
          code: 400,
          message: "Sai mật khẩu!!!",
        });
        return;
      }
      req.body.UserPassword = md5(req.body.newPassword);
    }
    const editedBy = {
      UserId: res.locals.user.id,
      editedAt: new Date(),
    };
    await User.updateOne(
      {
        _id: res.locals.user.id,
      },
      {
        $set: { ...req.body, editedBy: undefined },
        $push: { editedBy: editedBy },
      }
    );

    // req.flash("success", "Cập nhật thành công!");
    res.json({
      code: 200,
      message: "Cập nhật thành công",
    });
  } catch (error) {
    // req.flash("error", "Cập nhật thất bại!");
    console.log(error);
    res.json({
      code: 400,
      message: "Cập nhật thất bại!",
    });
  }
  // res.redirect(`${systemConfig.prefixAdmin}/user`);
};

// [POST] /user/comment/add/:CourseID
module.exports.addComment = async (req, res) => {
  if (req.cookies.user_token) {
    console.log(req.body);
    req.body.Rate = parseInt(req.body.Rate);
    const test = await User.findOne({
      "UserCourse.CourseId": req.params.CourseID,
      _id: res.locals.user._id,
    });
    if (!test) {
      res.json({
        code: 400,
        message: "Bạn chưa mua khoá học!",
      });
      return;
    }

    await User.updateOne(
      {
        "UserCourse.CourseId": req.params.CourseID,
        _id: res.locals.user._id,
      },
      {
        "UserCourse.$.CourseReview": 1,
      }
    );
    console.log(res.locals.user);

    await Course.updateOne(
      { _id: req.params.CourseID },
      {
        $push: {
          CourseReview: {
            UserId: res.locals.user._id,
            Rate: req.body.Rate,
            Comment: req.body.Comment,
          },
        },
      }
    );

    const course = await Course.findOne({ _id: req.params.CourseID });
    req.flash("success", "Thanh toán thành công");
    res.redirect(`/courses/detail/${course.CourseSlug}`);
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};

// [POST] /user/video-status/mark-video-completed
module.exports.markVideoAsCompleted = async (req, res) => {
  const { courseId, videoId } = req.body;
  const userId = res.locals.user._id;

  try {
    // Tìm người dùng theo userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Tìm khóa học của người dùng trong UserCourse
    const userCourse = user.UserCourse.find(
      (course) => course.CourseId === courseId
    );
    if (!userCourse) {
      return res.status(404).json({ message: "Course not found for user" });
    }

    // Tìm video từ videoId và lấy LessonId
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const lessonId = video.LessonId;
    console.log("LessonId:", lessonId); // Log lessonId để kiểm tra

    // Kiểm tra nếu CourseProcess là mảng rỗng, nếu có, khởi tạo nó
    if (!userCourse.CourseProcess) {
      userCourse.CourseProcess = []; // Khởi tạo mảng nếu trống
    }

    // Tìm bài học trong CourseProcess
    let lessonIndex = userCourse.CourseProcess.findIndex(
      (process) => process.LessonId === lessonId
    );
    console.log("LessonIndex:", lessonIndex); // Log lessonIndex để kiểm tra

    if (lessonIndex === -1) {
      // Nếu chưa có LessonId trong CourseProcess, thêm mới
      console.log("Adding new lesson to CourseProcess");
      await User.updateOne(
        { _id: userId, "UserCourse.CourseId": courseId },
        {
          $push: {
            "UserCourse.$.CourseProcess": {
              LessonId: lessonId,
              LessonStatus: 0, // Mới bắt đầu, trạng thái là chưa hoàn thành
              LessonProcess: [videoId], // Thêm videoId vào LessonProcess
            },
          },
        }
      );
            // Cập nhật lại lessonIndex sau khi thêm mới
            lessonIndex = userCourse.CourseProcess.length - 1;
    } else {
      // Cập nhật LessonProcess của bài học có LessonId đã tồn tại
      await User.updateOne(
        { _id: userId, "UserCourse.CourseId": courseId, "UserCourse.CourseProcess.LessonId": lessonId },
        {
          $addToSet: {
            "UserCourse.$.CourseProcess.$[lesson].LessonProcess": videoId, // Thêm videoId vào LessonProcess nếu chưa có
          },
        },
        {
          arrayFilters: [
            { "lesson.LessonId": lessonId }, // Điều kiện lọc đúng bài học
          ],
        }
      );
    }
    const lesson = userCourse.CourseProcess[lessonIndex];

     // Kiểm tra xem LessonProcess có phải là mảng và không rỗng
     if (Object.keys(lesson.LessonProcess).length > 0) {
      // Đếm số video trong bài học
      const totalVideosInLesson = await Video.countDocuments({
        LessonId: lessonId,
      });

      // Kiểm tra nếu tất cả video trong LessonProcess đã hoàn thành
      const allVideosCompleted =
      Object.keys(lesson.LessonProcess).length === totalVideosInLesson;
      console.log("video process", Object.keys(lesson.LessonProcess).length );
      if (allVideosCompleted) {
        // Cập nhật LessonStatus = 1 khi tất cả video trong bài học hoàn thành
        await User.updateOne(
          { _id: userId, "UserCourse.CourseId": courseId },
          {
            $set: { "UserCourse.$.CourseProcess.$[lesson].LessonStatus": 1 },
          },
          {
            arrayFilters: [
              { "lesson.LessonId": lessonId },
            ],
          }
        );

        // Kiểm tra nếu tất cả bài học trong khóa học đã hoàn thành
        const allLessonsCompleted = userCourse.CourseProcess.every(
          (lesson) => lesson.LessonStatus === 1
        );

        if (allLessonsCompleted) {
          // Cập nhật CourseStatus = 1 khi tất cả bài học trong khóa học hoàn thành
          await User.updateOne(
            { _id: userId, "UserCourse.CourseId": courseId },
            {
              $set: { "UserCourse.$.CourseStatus": 1 },
            }
          );
          // Xóa LessonProcess khi khóa học hoàn thành
          await User.updateOne(
            { _id: userId, "UserCourse.CourseId": courseId },
            {
              $set: { "UserCourse.$.CourseProcess.$[].LessonProcess": [] },
            }
          );
        }
      }
    } else {
      console.log("LessonProcess is empty or not an array");
    }

    res.status(200).json({
      message: "Video progress updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating video progress:", error);
    res.status(500).json({ message: "Error updating video progress", error });
  }
};


// [GET] /user/video-status/:courseId
module.exports.getVideoStatus = async (req, res) => {
  const { courseId } = req.params;
  const userId = res.locals.user._id; // Lấy userId từ `res.locals.user`

  try {
    const user = await User.findById(userId); // Tìm người dùng

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Tìm khóa học trong UserCourse
    const userCourse = user.UserCourse.find(
      (course) => course.CourseId === courseId
    );
    if (!userCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Nếu CourseStatus = 1, tất cả video đều đã hoàn thành
    if (userCourse.CourseStatus === 1) {
      return res.status(200).json({ videoStatus: "completed" });
    }

    // Kiểm tra trạng thái của từng lesson và video trong khóa học
    const videoStatuses = {};

    for (const lesson of userCourse.CourseProcess) {
      const totalVideosInLesson = await Video.countDocuments({
        lessonId: lesson.LessonId,
      });
      // Nếu LessonStatus = 1, tất cả video trong LessonProcess đều đã hoàn thành
      if (lesson.LessonStatus === 1) {
        lesson.LessonProcess.forEach((videoId) => {
          videoStatuses[videoId] = 1; // Đánh dấu tất cả video trong lesson là đã hoàn thành
        });
      } else {
        // Kiểm tra trạng thái từng video trong LessonProcess
        lesson.LessonProcess.forEach((videoId) => {
          if (videoStatuses[videoId] !== 1) {
            videoStatuses[videoId] = 0;
          }
        });
      }
      if (lesson.LessonProcess.length === totalVideosInLesson) {
        lesson.LessonStatus = 1; // Đánh dấu LessonStatus là 1 (hoàn thành)
      }
    }

    return res.status(200).json(videoStatuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
