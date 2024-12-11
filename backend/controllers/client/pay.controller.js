const User = require("../../models/user.model");
const Course = require("../../models/course.model");
const Pay = require("../../models/pay.model");
const Admin = require("../../models/admin.model");

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
      // const course = await Course.findOne({ _id: CourseID })
      res.json({
        code: 400,
        message: "Bạn đã mua khoá học!"
      })
      // req.flash("error", "Bạn đã mua khoá học!")
      // res.redirect(`/courses/${course.CourseSlug}`)
      return;
    }

    const course = await Course.findOne({ _id: CourseID })

    req.body.UserId = res.locals.user.id
    req.body.CourseId = CourseID
    req.body.PayTotal = course.CoursePrice * (100 - course.CourseDiscount) / 100
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

        const money = (res.locals.user.UserMoney ? res.locals.user.UserMoney : 0) + req.body.PayTotal

        await User.updateOne({
          _id: UserID
        }, {
          $push: { UserCourse: newCourse },
          UserMoney: money
        }
        );

        await Pay.updateOne({
          UserId: UserID,
          CourseId: CourseID,
        }, {
          PayStatus: 1,
          PayTeacher: money * courseTest.CourseSalary / 100,
          PayProfit: money * (100 - courseTest.CourseSalary) / 100
        })

        await Admin.updateOne({
          _id: courseTest.CourseIntructor
        }, {
          AdminSalary: money * courseTest.CourseSalary / 100
        })

        const bought = courseTest.CourseBought + 1;
        await Course.updateOne({
          _id: CourseID
        }, {
          CourseBought: bought,
          CourseProfit: money * (100 - courseTest.CourseSalary) / 100
        })

        console.log("Thanh toán thành công")
      }
      addCourseUser(res.locals.user.id, CourseID)
    }, 10000);

    // req.flash("success", "Thanh toán thành công")
    // res.redirect(`/courses/detail/${course.CourseSlug}`);
    res.json({
      code: 200,
      message: "Mua khoá học thành công!"
    })
  } else {
    // res.render("client/pages/auth/login", {
    //   pageTitle: "Đăng nhập",
    // });
    res.json({
      code: 200,
      message: "Bạn chưa đăng nhập!"
    })
  }
};