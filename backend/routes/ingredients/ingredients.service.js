const { Ingredient } = require("./ingredients.model");

const getIngredients = async () => {
  const ingredient = await Ingredient.find({});
  return ingredient;
};

module.exports = {
  getIngredients,
};