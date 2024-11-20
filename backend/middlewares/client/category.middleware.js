const Category = require("../../models/category.model")
const createTreeHelper = require("../../helpers/createTree")

module.exports.CateHeader = async (req, res, next) => {
  const category = await Category.find({
    CategoryDeleted: 1,
  })
  const allCategory = createTreeHelper.tree(category);
  res.locals.allCategory = allCategory
  next()
}