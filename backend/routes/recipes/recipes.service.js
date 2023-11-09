const { categoriesArr } = require("../../data/categoryArr");
const { UnknownDatabaseError } = require("../../modules/users/users.service");
const { Recipe } = require("./recipes.model");
const { default: mongoose } = require("mongoose");

const getCategories = () => {
  return categoriesArr;
};
const getRecipes = async filter => {
  try {
    return await Recipe.find(filter);
  } catch (e) {
    console.error(e);
    throw new UnknownDatabaseError();
  }
};

const getCategoryPage = async (category, skip, limit, userId) => {
  const regex = new RegExp(category, "i");
  const totalCount = await Recipe.countDocuments({
    category: regex,
  });
  const recipesPages = await Recipe.find({
    category: regex,
    $or: [{ owner: userId }, { owner: { $exists: false } }],
  })
    .sort({ popularity: -1 })
    .skip(skip)
    .limit(limit);
  return [recipesPages, totalCount];
};

const addRecipe = async (payload, user) => {
  try {
    return await Recipe.create({
      ...payload,
      owner: user._id,
      ingredients: payload.ingredients.map(ingredient => ({
        measure: ingredient.measure,
        id: new mongoose.Types.ObjectId(ingredient.id),
      })),
    });
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

module.exports = {
  getCategories,
  getCategoryPage,
  addRecipe,
  getRecipes,
};
