const { Recipe } = require("../../modules/recipes/recipesModel");

const getCategoryPage = async (category, skip, limit) => {
    // Create a regular expression (regex) to perform a case-insensitive search for the given category.

    const regex = new RegExp(category, "i");
    // Count the total number of documents that match the category using the regex.
    const totalCount = await Recipe.countDocuments({ category: regex });
    // Find recipes that match the category using the regex.
  // Sort the results by 'popularity' in descending order.
  // Skip the specified number of documents (for pagination).
  // Limit the number of documents returned (for pagination).
  const recipesPages = await Recipe.find({ category: regex })
    .sort({ popularity: -1 })
    .skip(skip)
        .limit(limit);
    // Return an array containing the recipes and the total count of matching documents.
  return [recipesPages, totalCount];
};

module.exports = {
  getCategoryPage,
};
