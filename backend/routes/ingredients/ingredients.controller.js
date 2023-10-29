const { getIngredients } = require("./ingredients.service");

const getIngredientsHandler = async (req, res) => {
    const ingredients = await getIngredients();
    return res.json(ingredients);
};

module.exports = {
    getIngredientsHandler
};