const Banner = require("../../models/banner.model");
const Course = require("../../models/course.model");
// [GET] /banner
module.exports.index = async (req, res) => {
  const banners = await Banner.find({
    BannerDeleted: 1,
    BannerStatus: 1
  }).lean();

  for (const banner of banners) {
    const course = await Course.findOne({ _id: banner.BannerCourse });
    // console.log(intructor)
    banner.course = course
  }

  res.json(banners)
  // res.render('client/pages/courses/index', {
  //   pageTitle: "Danh sách khoá học",
  //   courses: courses,
  //   allCategory: newCategory,
  // })
}