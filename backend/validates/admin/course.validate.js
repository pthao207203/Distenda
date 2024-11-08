module.exports.createPost = (req, res, next) => {
  if (!req.body.CourseName){
    req.flash("error", "Vui lòng nhập tên khoá học");
    res.redirect("back");
    return;
  }

  if (!req.body.CourseInstructor){
    req.flash("error", "Vui lòng nhập tên giảng viên");
    res.redirect("back");
    return;
  }

  if (!req.body.CoursePrice){
    req.flash("error", "Vui lòng nhập học phí của khoá học");
    res.redirect("back");
    return;
  }

  if (!req.body.CoursePicture){
    req.flash("error", "Vui lòng thêm ảnh của khoá học");
    res.redirect("back");
    return;
  }
  
  next();
}