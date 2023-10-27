const { getCategories } = require("../../service/recipesService");

const getCategoryHandler = async (req, res) => {
  res.json(getCategories());
};

module.exports = {
  getCategoryHandler,
};
