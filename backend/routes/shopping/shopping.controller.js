const { getShoppingList } = require("./shopping.service");
const { addIngredient } = require("./shopping.service");

const getShoppingListHandler = async (req, res) => {
  const { _id } = req.user;
  const ingredients = await getShoppingList(_id);
  res.json({ status: "succes", code: 200, ingredients });
};

const addIngredientHandler = async (req, res) => {
  const { recipeId, ingredientId } = req.body;

  const shoppingList = await addIngredient(recipeId, ingredientId, req.user);
  res.status(201).json({ status: "succes", code: 201, shoppingList });
};

module.exports = {
  getShoppingListHandler,
  getShoppingList,
  addIngredientHandler,
};
