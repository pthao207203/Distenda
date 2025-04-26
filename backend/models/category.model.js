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
    unique: true,
  },
  CategoryDescription: String,
  CategoryPicture: String,
  CategoryPosition: Number,
  CategoryStatus: {
    type: Number,
    default: 1,
  },
  CategoryDeleted: {
    type: Number,
    default: 1,
  },
  createdBy: {
    UserId: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  editedBy: [
    {
      UserId: String,
      editedAt: Date,
    },
  ],
  deletedBy: {
    UserId: String,
    deletedAt: Date,
  },
});

const Category = mongoose.model("Category", categorySchema, "Category");

module.exports = Category;
