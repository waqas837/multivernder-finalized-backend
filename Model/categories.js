const mongoose = require("mongoose");
const categoriesList = new mongoose.Schema({
    category: String,
});

const CategoriesModel = new mongoose.model("Categories", categoriesList);
module.exports = { CategoriesModel };
