const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const categorySchema = new mongoose.Schema({
  CategoryName: String,
  CategoryParent_id: {
    type: String,
    default: "",
  },
  CategorySlug: {
    type: String,
    slug: "CategoryName",
    unique: true
  },
  CategoryDescription: String,
  CategoryPicture: String,
  CategoryPosition: Number,
  CategoryStatus: Number,
  CategoryDeleted: {
    type: Number,
    default: 1,
  },
  deletedAt: Date,
}, {timestamps: true});

const Category = mongoose.model('Category', categorySchema, "Category");

module.exports = Category;