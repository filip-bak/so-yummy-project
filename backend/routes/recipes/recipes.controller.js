const { getCategories, addRecipe } = require("./recipes.service");
const { getCategoryPage } = require("./recipes.service");
const { Recipe } = require("./recipes.model");
const { ObjectId } = require("mongodb");
const Joi = require("joi");

const addRecipeHandler = async (req, res) => {
  const validationResult = validateAddRecipePayload(req.body);

  if (validationResult.error) {
    return res.status(400).json(validationResult.error.details[0].message);
  }

  try {
    const recipe = await addRecipe(req.body, req.user);
    return res.status(201).json(recipe);
  } catch (err) {
    console.error(err.message);
  }
};

const getCategoryHandler = async (req, res) => {
  res.json(getCategories());
};

const getCategoryPageHandler = async (req, res) => {
  const { category } = req.params;
  const { _id } = req.user;
  let { page = 1, limit = 8 } = req.query;

  const skip = (page - 1) * limit;

  limit = parseInt(limit) > 8 ? 8 : parseInt(limit);

  const [recipes, totalCount] = await getCategoryPage(
    category,
    skip,
    limit,
    _id
  );

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
  const { _id } = req.user;
  const params = { $or: [{ owner: _id }, { owner: { $exists: false } }] };
  const result = await Recipe.find(params, "-createdAt -updatedAt");
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

const validateAddRecipePayload = async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    time: Joi.number().required(),
    ingredients: Joi.array(),
    thumb: Joi.string().required(),
    preview: Joi.string().required(),
    instructions: Joi.string().required(),
  }).or("title", "ingredient");

  return schema.validate(req.body);
};

module.exports = {
  getCategoryHandler,
  getCategoryPageHandler,
  getRecipeByIdHandler,
  getRecipesHandler,
  addRecipeHandler,
};
