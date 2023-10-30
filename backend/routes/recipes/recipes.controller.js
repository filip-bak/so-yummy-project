const { getCategories } = require("./recipes.service");
const { getCategoryPage } = require("./recipes.service");
const { Recipe } = require("./recipes.model");
const { ObjectId } = require("mongodb");

const getCategoryHandler = async (req, res) => {
  res.json(getCategories());
};

const getCategoryPageHandler = async (req, res) => {
  // Extract the 'category' parameter from the request URL.
  const { category } = req.params;

  // Destructure 'page' and 'limit' from the request query parameters,
  // and set default values if they are not provided.
  let { page = 1, limit = 8 } = req.query;

  // Calculate the number of documents to skip based on pagination parameters.
  const skip = (page - 1) * limit;

  // Ensure 'limit' is not greater than 8 for pagination.
  limit = parseInt(limit) > 8 ? 8 : parseInt(limit);

  // Call the 'getCategoryPage' function to retrieve recipes for the specified category.
  const [recipes, totalCount] = await getCategoryPage(category, skip, limit);

  // Prepare and send a JSON response containing relevant information.
  return res.json({
    totalCount,
    // Total number of matching documents.
    currentPage: parseInt(page),
    // Current page number.
    recipes,
    // Array of recipes for the current page.
    skip,
    // Number of documents skipped for pagination.
    limit,
    // Maximum number of documents to return per page.
  });
};

const getRecipeByIdHandler = async (req, res) => {
  const { id } = req.params;
  // Extracts the 'id' parameter from the request

  // const ObjectId = mongoose.Types.ObjectId;
  // Provides a way to convert a string to a MongoDB ObjectId

  try {
    const recipe = await Recipe.aggregate([
      // Executes an aggregation pipeline on the Recipe collection
      {
        $match: {
          _id: new ObjectId(id),
        },
        // Matches documents where the '_id' field matches the provided 'id'
      },
      {
        $lookup: {
          from: "ingredients",
          // Performs a left outer join with the 'ingredients' collection
          localField: "ingredients.id",
          // Specifies the field from the local collection (Recipe)
          foreignField: "_id",
          // Specifies the field from the foreign collection (ingredients)
          as: "ingr_nfo",
          // Specifies the alias for the joined documents
        },
      },
      {
        $set: {
          ingredients: {
            $map: {
              input: "$ingredients",
              // Iterates over the 'ingredients' array
              in: {
                $mergeObjects: [
                  // Merges the current ingredient with additional information
                  "$$this",
                  // References the current element in the array
                  {
                    $arrayElemAt: [
                      // Retrieves the element at a specified index from an array
                      "$ingr_nfo",
                      { $indexOfArray: ["$ingr_nfo._id", "$$this.id"] },
                      // Finds the index of the ingredient in the joined documents
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
        // Removes unnecessary fields from the result
      },
    ]);

    if (recipe.length > 0) {
      return res.json(recipe[0]);
      // Sends the recipe data as a JSON response
    } else {
      return res.status(404).json({ message: "Recipe not found" });
      // Sends a 404 error if no recipe is found
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
    // Sends a 500 error for any internal server error
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
