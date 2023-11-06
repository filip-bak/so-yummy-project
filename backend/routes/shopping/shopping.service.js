const { Ingredient } = require("../../routes/ingredients/ingredients.model");
const { User } = require("../../modules/users/users.model");
const { Recipe } = require("../../routes/recipes/recipes.model");

const getShoppingList = async _id => {
  const { shoppingList } = await User.findById(_id);

  const ingredients = await Ingredient.find({});

  const updatedShoppingList = shoppingList.map(recipe => {
    const updatedIngredients = recipe.ingredients.map(ingredient => {
      const ingredientDetails = ingredients.find(({ _id }) =>
        _id.equals(ingredient.id)
      );
      return {
        ...ingredient,
        ttl: ingredientDetails.ttl,
        thb: ingredientDetails.thb,
      };
    });

    return { ...recipe, ingredients: updatedIngredients };
  });

  return updatedShoppingList;
};

const addIngredient = async (recipeId, ingredientId, user) => {
  const recipe = await Recipe.findById(recipeId);

  if (!recipe) {
    throw new Error("Recipe not found");
  }

  const [ingredient] = recipe.ingredients.filter(
    ({ id }) => id.toString() === ingredientId
  );

  if (!ingredient) {
    throw new Error("Ingredient not found");
  }

  const newRecipeId = recipeId;
  const recipeAlreadyExists = user.shoppingList.find(
    ({ recipeId }) => recipeId === newRecipeId
  );

  if (recipeAlreadyExists) {
    const ingredientAlreadyExists = recipeAlreadyExists.ingredients.some(
      ({ id }) => id.toString() === ingredient.id.toString()
    );
    if (!ingredientAlreadyExists) {
      recipeAlreadyExists.ingredients.push({
        id: ingredient.id.toString(),
        measure: ingredient.measure,
      });

      const idx = user.shoppingList.findIndex(
        ({ recipeId }) => recipeId === newRecipeId
      );
      user.shoppingList.splice(idx, 1);
      user.shoppingList.push(recipeAlreadyExists);
    } else {
      throw new Error("Ingredient already added");
    }
  } else {
    user.shoppingList.push({
      recipeId,
      recipeTitle: recipe.title,
      ingredients: [
        { id: ingredient.id.toString(), measure: ingredient.measure },
      ],
    });
  }

  await user.save();

  return user.shoppingList;
};

const deleteIngredient = async (ingredientId, user, recipeId) => {
  const { _id } = user;
  const recipeIndex = user.shoppingList.findIndex(
    recipe => recipe.recipeId === recipeId
  );

  if (recipeIndex === -1) {
    throw new Error("Recipe not found in shopping list.");
  }

  const ingredientIndex = user.shoppingList[recipeIndex].ingredients.findIndex(
    ingredient => ingredient.id === ingredientId
  );

  if (ingredientIndex === -1) {
    throw new Error("Ingredient not found in recipe.");
  }

  user.shoppingList[recipeIndex].ingredients.splice(ingredientIndex, 1);

  if (user.shoppingList[recipeIndex].ingredients.length === 0) {
    user.shoppingList.splice(recipeIndex, 1);
  } else {
    await User.findByIdAndUpdate(
      _id,
      { $set: { shoppingList: user.shoppingList } },
      { new: true }
    );
  }

  await user.save();

  return { ingredientId, recipeId };
};

module.exports = {
  getShoppingList,
  addIngredient,
  deleteIngredient,
};
