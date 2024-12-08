const Course = require("../../models/course.model");
const Category = require("../../models/category.model")
const Admin = require("../../models/admin.model")
const Lesson = require("../../models/lesson.model")
const Video = require("../../models/video.model")
const createTreeHelper = require("../../helpers/createTree");


// // [GET] /courses
// module.exports.index = async (req, res) => {
//   const courses = await Course.find({
//     CourseDeleted: 1,
//     CourseStatus: 1
//   });

//   const category = await Category.find({
//     CategoryDeleted: 1,
//   })
//   const newCategory = createTreeHelper.tree(category);

//   //console.log(courses);

//   res.render('client/pages/courses/index', {
//     pageTitle: "Danh sách khoá học",
//     courses: courses,
//     allCategory: newCategory,
//   })
// }

// [GET] /category/:CategorySlug
module.exports.detail = async (req, res) => {
  try {
    const find = {
      CategoryDeleted: 1,
      CategorySlug: req.params.CategorySlug,
      CategoryStatus: 1
    }
    const category = await Category.findOne(find);

    const getSubCategory = async (parentId) => {
      const subs = await Category.find({
        CategoryParent_id: parentId,
        CategoryStatus: 1,
        CategoryDeleted: 1,
      })
      let allSub = [...subs];
      for (const sub of subs) {
        const childs = await getSubCategory(sub.id);
        allSub = allSub.concat(childs);
      }
      return allSub;
    }
    const listSub = await getSubCategory(category.id)
    const listSubId = listSub.map(item => item.id)

    const courses = await Course.find({
      CourseCatogory: { $in: [category.id, ...listSubId] },
      CourseStatus: 1,
      CourseDeleted: 1
    }).lean();

    for (const course of courses) {
      const intructor = await Admin.findOne({ _id: course.CourseIntructor });
      course.intructor = intructor.AdminFullName
    }

    res.json(courses)
    // res.render('client/pages/courses/index', {
    //   courses: courses,
    //   allCategory: allCategory,
    // });
  } catch (error) {
    req.flash("error", "Không tìm thấy danh mục!")
    res.redirect(`/courses`)
  }
}