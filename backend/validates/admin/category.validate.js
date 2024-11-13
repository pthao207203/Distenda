module.exports.createPost = (req, res, next) => {
  if (!req.body.CategoryName){
    req.flash("error", "Vui lòng nhập tên danh mục");
    res.redirect("back");
    return;
  }
  
  next();
}