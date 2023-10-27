const { getCategoryPage } = require("../../service/recipesService");

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

module.exports = {
  getCategoryPageHandler,
};
