const { Recipe } = require("../recipes/recipes.model");
const { RequestError } = require("../../helpers/RequestError");

const getPopularRecipesHandler = async (req, res) => {
  const result = await Recipe.aggregate([
    {
      $project: {
        favorites: 1,
        title: 1,
        thumb: 1,
        description: 1,
        popularity: 1,
        preview: 1,
        count: { $size: "$favorites" },
      },
    },
    { $match: { owner: { $exists: false } } },
    { $sort: { count: -1 } },
    { $skip: 0 },
    { $limit: 4 },
  ]);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getPopularRecipesHandler,
};
