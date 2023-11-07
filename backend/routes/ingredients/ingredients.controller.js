const { getIngredients } = require("./ingredients.service");

const getIngredientsHandler = async (req, res) => {
  if (req.query === undefined || req.query.length < 3) {
    return res.json([]);
  }
  const ingredients = await getIngredients(req.query.query);
  return res.json(ingredients);
};

module.exports = {
  getIngredientsHandler,
};
