const { categoriesArr } = require("../../data/categoryArr");

const getCategories = () => {
  return categoriesArr;
};

module.exports = {
  getCategories,
};