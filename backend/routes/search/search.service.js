const { Recipe } = require("../recipes/recipes.model");
const { Ingredient } = require("../ingredients/ingredients.model");

const searchRecipes = async (params, page, recipesPerPage, userId) => {
  const queryParams = await getQueryParams(params);
  queryParams.$or = [{ owner: userId }, { owner: { $exists: false } }];
  const totalCount = await Recipe.countDocuments(queryParams).exec();
  const recipes = await Recipe.find(queryParams)
    .select("_id title thumb")
    .skip((page - 1) * recipesPerPage)
    .limit(recipesPerPage)
    .exec();
  const mappedRecipes = recipes.map(recipe => ({
    id: recipe._id,
    title: recipe.title,
    thumb: recipe.thumb,
  }));
  return [mappedRecipes, totalCount];
};

const getQueryParams = async params => {
  if (typeof params.title === "string") {
    return { title: { $regex: params.title, $options: "i" } };
  } else {
    const ingredients = await Ingredient.find({
      ttl: { $regex: params.ingredient, $options: "i" },
    })
      .select("_id")
      .exec();
    const ids = ingredients.map(ingredient => ingredient._id);
    return { "ingredients.id": { $in: ids } };
  }
};

module.exports = {
  searchRecipes,
};
