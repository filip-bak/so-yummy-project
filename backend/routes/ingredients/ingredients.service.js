const { Ingredient } = require("./ingredients.model");

const getIngredients = async query => {
  return await Ingredient.find({
    ttl: { $regex: query, $options: "i" },
  }).sort({ ttl: 1 });
};

module.exports = {
  getIngredients,
};
