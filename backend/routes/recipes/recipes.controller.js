const { getCategories } = require("./recipes.service");
const { getCategoryPage } = require("./recipes.service");
const { Recipe } = require("./recipes.model");
const { ObjectId } = require("mongodb");

const getCategoryHandler = async (req, res) => {
  res.json(getCategories());
};

const getCategoryPageHandler = async (req, res) => {
  const { category } = req.params;

  let { page = 1, limit = 8 } = req.query;

  const skip = (page - 1) * limit;

  limit = parseInt(limit) > 8 ? 8 : parseInt(limit);

  const [recipes, totalCount] = await getCategoryPage(category, skip, limit);

  return res.json({
    totalCount,

    currentPage: parseInt(page),

    recipes,

    skip,

    limit,
  });
};

const getRecipeByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "ingredients",

          localField: "ingredients.id",

          foreignField: "_id",

          as: "ingr_nfo",
        },
      },
      {
        $set: {
          ingredients: {
            $map: {
              input: "$ingredients",

              in: {
                $mergeObjects: [
                  "$$this",

                  {
                    $arrayElemAt: [
                      "$ingr_nfo",
                      { $indexOfArray: ["$ingr_nfo._id", "$$this.id"] },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      {
        $unset: ["ingr_nfo", "ingredients.id"],
      },
    ]);

    if (recipe.length > 0) {
      return res.json(recipe[0]);
    } else {
      return res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getRecipesHandler = async (req, res) => {
  const result = await Recipe.find({}, "-createdAt -updatedAt");
  res.json(sortRecipes(result));
};

const sortRecipes = arr => {
  let list = { Breakfast: [], Miscellaneous: [], Chicken: [], Dessert: [] };
  arr.forEach(item => {
    if (list[item.category] && list[item.category].length < 4) {
      list[item.category].push(item);
    }
  });
  return list;
};

module.exports = {
  getCategoryHandler,
  getCategoryPageHandler,
  getRecipeByIdHandler,
  getRecipesHandler,
};
