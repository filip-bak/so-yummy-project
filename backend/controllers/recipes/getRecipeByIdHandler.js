const { Recipe } = require("../../modules/recipes/recipesModel");
const { mongoose } = require("mongoose");

const getRecipeByIdHandler = async (req, res) => {
  const { id } = req.params;
  // Extracts the 'id' parameter from the request

  const ObjectId = mongoose.Types.ObjectId;
  // Provides a way to convert a string to a MongoDB ObjectId

  try {
    const recipe = await Recipe.aggregate([
    // Executes an aggregation pipeline on the Recipe collection
      {
        $match: { _id: ObjectId(id) },
        // Matches documents where the '_id' field matches the provided 'id'
      },
      {
        $lookup: {
          from: 'ingredients',
          // Performs a left outer join with the 'ingredients' collection
          localField: 'ingredients.id',
          // Specifies the field from the local collection (Recipe)
          foreignField: '_id',
          // Specifies the field from the foreign collection (ingredients)
          as: 'ingr_nfo',
          // Specifies the alias for the joined documents
        },
      },
      {
        $set: {
          ingredients: {
            $map: {
              input: '$ingredients',
              // Iterates over the 'ingredients' array
              in: {
                $mergeObjects: [
                // Merges the current ingredient with additional information
                  '$$this',
                  // References the current element in the array
                  {
                    $arrayElemAt: [
                    // Retrieves the element at a specified index from an array
                      '$ingr_nfo',
                      { $indexOfArray: ['$ingr_nfo._id', '$$this.id'] },
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
        $unset: ['ingr_nfo', 'ingredients.id'],
        // Removes unnecessary fields from the result
      },
    ]);

    if (recipe.length > 0) {
      return res.json(recipe[0]);
      // Sends the recipe data as a JSON response
    } else {
      return res.status(404).json({ message: 'Recipe not found' });
      // Sends a 404 error if no recipe is found
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
    // Sends a 500 error for any internal server error
  }
};


module.exports = {
  getRecipeByIdHandler,
};
