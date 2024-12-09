const User = require("../../models/user.model");
const Course = require("../../models/course.model");

// // [GET] /user/like/add/:CourseID
module.exports.addLike = async (req, res) => {
  if (req.cookies.user_token) {
    await User.updateOne({
      _id: res.locals.user.id
    }, {
      $push: { UserLikes: req.params.CourseID }
    })
    req.flash("success", "Thêm khoá học yêu thích thành công!")
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
    await User.updateOne({
      _id: res.locals.user.id
    }, {
      $pull: { UserLikes: req.params.CourseID }
    })
    req.flash("success", "Xoá khoá học yêu thích thành công!")
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
      "UserCourse.CourseId": req.params.CourseID
    })
    console.log("test ", test)
    if (test) {
      const course = await Course.findOne({ _id: req.params.CourseID })
      req.flash("error", "Bạn đã mua khoá học!")
      res.redirect(`/courses/${course.CourseSlug}`)
      return;
    }
    const course = await Course.findOne({
      _id: req.params.CourseID
    })
    console.log(course)
    res.render("client/pages/courses/pay", {
      pageTitle: "Thanh toán",
      course: course
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
      "UserCourse.CourseId": req.params.CourseID
    })
    if (test) {
      const course = await Course.findOne({ _id: req.params.CourseID })
      req.flash("error", "Bạn đã mua khoá học!")
      res.redirect(`/courses/${course.CourseSlug}`)
      return;
    }
    const newCourse = {
      CourseId: req.params.CourseID,
      CourseStatus: 0, // Mặc định là 0
      CourseProcess: [], // Mặc định là một mảng rỗng
    };

    // Cập nhật thông tin người dùng
    await User.updateOne({
      _id: res.locals.user.id
    }, {
      $push: { UserCourse: newCourse }
    }
    );
    console.log(res.locals.user)

    const course = await Course.findOne({ _id: req.params.CourseID })
    req.flash("success", "Thanh toán thành công")
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
  res.json(res.locals.user)
};

// // [GET] /user/profile/edit
module.exports.profileEdit = async (req, res) => {
  res.render("client/pages/user/edit", {
    pageTitle: "Trang cá nhân",
    user: res.locals.user
  });
};

// [POST] /courses/comment/add/:CourseID
module.exports.addComment = async (req, res) => {
  if (req.cookies.user_token) {
    console.log(req.body)
    req.body.Rate = parseInt(req.body.Rate);
    const test = await User.findOne({
      "UserCourse.CourseId": req.params.CourseID,
      _id: res.locals.user._id,
    })
    if (!test) {
      return;
    }

    await User.updateOne({
      "UserCourse.CourseId": req.params.CourseID,
      _id: res.locals.user._id,
    }, {
      'UserCourse.$.CourseReview': 1
    }
    );
    console.log(res.locals.user)

    await Course.updateOne({ _id: req.params.CourseID }, {
      $push: {
        CourseReview: {
          UserId: res.locals.user._id,
          Rate: req.body.Rate,
          Comment: req.body.Comment,
        }

      },
    })

    const course = await Course.findOne({ _id: req.params.CourseID })
    req.flash("success", "Thanh toán thành công")
    res.redirect(`/courses/detail/${course.CourseSlug}`);
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};