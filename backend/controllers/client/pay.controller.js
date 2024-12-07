const User = require("../../models/user.model");
const Course = require("../../models/course.model");
const Pay = require("../../models/pay.model");

// // [GET] /pay/:CourseID
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

// // [POST] /pay/:CourseSlug
module.exports.payPost = async (req, res) => {
  if (req.cookies.user_token) {
    const courseTest = await Course.findOne({
      CourseSlug: req.params.CourseSlug
    })
    const CourseID = courseTest._id
    console.log(CourseID)
    const test = await User.findOne({
      _id: res.locals.user.id,
      "UserCourse.CourseId": CourseID
    })
    if (test) {
      const course = await Course.findOne({ _id: CourseID })
      req.flash("error", "Bạn đã mua khoá học!")
      res.redirect(`/courses/${course.CourseSlug}`)
      return;
    }

    const course = await Course.findOne({ _id: CourseID })

    req.body.UserId = res.locals.user.id
    req.body.CourseId = CourseID
    req.body.Total = course.CoursePrice * (100 - course.CourseDiscount) / 100
    req.body.createdBy = {
      UserId: res.locals.user.id,
    };

    const pay = new Pay(req.body)
    await pay.save()

    setTimeout(() => {
      async function addCourseUser(UserID, CourseID) {
        const newCourse = {
          CourseId: CourseID,
          CourseStatus: 0,
          CourseProcess: [],
        };

        await User.updateOne({
          _id: UserID
        }, {
          $push: { UserCourse: newCourse }
        }
        );

        await Pay.updateOne({
          UserId: UserID,
          CourseId: CourseID
        }, { PayStatus: 1 })

        console.log("Thanh toán thành công")
      }
      addCourseUser(res.locals.user.id, CourseID)
    }, 10000);

    // const newCourse = {
    //   CourseId: req.params.CourseID,
    //   CourseStatus: 0, // Mặc định là 0
    //   CourseProcess: [], // Mặc định là một mảng rỗng
    // };

    // // Cập nhật thông tin người dùng
    // await User.updateOne({
    //   _id: res.locals.user.id
    // }, {
    //   $push: { UserCourse: newCourse }
    // }
    // );
    // console.log(res.locals.user)

    req.flash("success", "Thanh toán thành công")
    res.redirect(`/courses/detail/${course.CourseSlug}`);
  } else {
    res.render("client/pages/auth/login", {
      pageTitle: "Đăng nhập",
    });
  }
};