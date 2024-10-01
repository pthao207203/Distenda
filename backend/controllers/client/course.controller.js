module.exports.index = (req, res) => {
  res.render('client/pages/courses/index', {
    pageTitle: "Danh sách khoá học"
  })
}