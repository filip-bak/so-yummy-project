const { User } = require("../../modules/users/users.model");
const { Recipe } = require("../recipes/recipes.model");

const addFavoriteHandler = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const recipe = await Recipe.findOne({ _id: id });

  if (!recipe) {
    throw new Error("Recipe not found");
  }

  if (user.favorites.includes(id)) {
    throw new Error("This recipe has already been added to favorites");
  }

  user.favorites.push(id);
  recipe.favorites.push(user._id);

  await Promise.all([user.save(), recipe.save()]);

  res.status(200).json({ message: "Recipe added to favorites", recipe });
};

const deleteFavoriteHandler = async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const recipe = await Recipe.findOne({ _id: id });

  if (!recipe) {
    throw new Error("Recipe not found");
  }

  const recipeIndex = user.favorites.indexOf(id);

  if (recipeIndex === -1) {
    throw new Error("This recipe is not in your favorites");
  }

  user.favorites.splice(recipeIndex, 1);
  recipe.favorites.splice(recipe.favorites.indexOf(user._id), 1);

  await Promise.all([user.save(), recipe.save()]);

  res.status(200).json({ message: "Recipe removed from favorites", id });
};

const getFavoritePaginationHandler = async (req, res) => {
  const user = req.user;

  const page = parseInt(req.query.page) || 1;

  const limit = 4;

  const startIndex = (page - 1) * limit;

  try {
    const favoriteRecipes = await Recipe.find({
      _id: { $in: user.favorites },
    })
      .skip(startIndex)
      .limit(limit);

    const totalPages = Math.ceil(user.favorites.length / limit);

    res.status(200).json({
      currentPage: page,
      totalPages: totalPages,
      favorites: favoriteRecipes,
    });
  } catch (error) {
    console.error(`Error fetching favorite recipes: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFavoritesHandler = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findOne({ _id });

  if (!user) {
    throw new Error("Email or password is wrong");
  }

  const favoriteRecipes = await Recipe.find({
    _id: { $in: user.favorites },
  });

  res.status(200).json({
    favorites: favoriteRecipes,
  });
};

module.exports = {
  addFavoriteHandler,
  deleteFavoriteHandler,
  getFavoritePaginationHandler,
  getFavoritesHandler,
};
