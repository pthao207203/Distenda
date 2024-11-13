module.exports.createPost = (req, res, next) => {
  if (!req.body.RoleName){
    req.flash("error", "Vui lòng nhập tên nhóm quyền");
    res.redirect("back");
    return;
  }
  
  next();
}