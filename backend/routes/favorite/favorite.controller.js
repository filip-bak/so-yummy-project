const {Recipe}=require('../recipes/recipes.model')


const addFavoriteHandler = async (req, res) => {
    // Extracting user and recipe id from the request
    const user = req.user; // Assuming that req.user contains information about the logged-in user
    const { id } = req.params; // Assuming that id is the unique identifier of the recipe
  
    // Find the recipe with the provided id
    const recipe = await Recipe.findOne({ id });
  
    // If the recipe with the provided id is not found, throw an error
    if (!recipe) {
      // Throwing a custom error if the recipe is not found
      throw new Error("Recipe not found");
    }
  
    // Check if the recipe is already in the user's favorites
    if (user.favorites.includes(id)) {
      // Throwing a custom error if the recipe is already in favorites
      throw new Error("This recipe has already been added to favorites");
    }
  
    // Add the recipe id to the user's favorites and the user id to the recipe's favorites
    user.favorites.push(id);
    recipe.favorites.push(user._id);
  
    // Save both the user and recipe in the database
    await Promise.all([user.save(), recipe.save()]);
  
    // Respond with a success message and the updated recipe
    res.status(200).json({ message: "Recipe added to favorites", recipe });
};
  

  
  const deleteFavoriteHandler = async (req, res) => {
    const user = req.user; // Get the authenticated user from the request
    const { id } = req.params; // Get the ID of the recipe to be removed from favorites
  
    // Find the recipe with the specified ID
    const recipe = await Recipe.findOne({ id });
  
    // If the recipe with the specified ID is not found, throw a custom error
    if (!recipe) {
      throw new Error("Recipe not found");
    }
  
    // Check if the recipe is in the user's favorites
    const recipeIndex = user.favorites.indexOf(id);
  
    // If the recipe is not in the user's favorites, throw a custom error
    if (recipeIndex === -1) {
      throw new Error("This recipe is not in your favorites");
    }
  
    // Remove the recipe from the user's favorites list and also remove the user from the recipe's favorites list
    user.favorites.splice(recipeIndex, 1);
    recipe.favorites.splice(recipe.favorites.indexOf(user._id), 1);
  
    // Save both the user and the recipe to persist the changes
    await Promise.all([user.save(), recipe.save()]);
  
    // Respond with a success message and the ID of the removed recipe
    res.status(200).json({ message: "Recipe removed from favorites", id });
};
  

  
  const getFavoritePaginationHandler = async (req, res) => {
    // Retrieve the user from the request object
    const user = req.user;
  
    // Parse the page parameter from the query string, default to 1 if not provided
    const page = parseInt(req.query.page) || 1;
  
    // Define the limit of items per page
    const limit = 4;
  
    // Calculate the starting index for pagination based on the page number and limit
    const startIndex = (page - 1) * limit;
  
    try {
      // Find favorite recipes for the current user using their favorites array
      const favoriteRecipes = await Recipe.find({
        _id: { $in: user.favorites },
      })
      .skip(startIndex)
      .limit(limit);
  
      // Calculate the total number of pages based on the total number of favorites and the limit per page
      const totalPages = Math.ceil(user.favorites.length / limit);
  
      // Send the paginated list of favorite recipes as a response
      res.status(200).json({
        currentPage: page,
        totalPages: totalPages,
        favorites: favoriteRecipes,
      });
    } catch (error) {
      // If an error occurs during database operation, handle it here
      console.error(`Error fetching favorite recipes: ${error.message}`);
      res.status(500).json({ message: "Internal server error" });
    }
};
  


  const getFavoritesHandler = async (req, res) => {
    // Get the user's _id from the request object
    const { _id } = req.user;
  
    // Find the user in the database based on their _id
    const user = await User.findOne({ _id });
  
    // If user is not found, throw a 'NotAuthorizedError' with a message
    if (!user) {
      throw new Error("Email or password is wrong");
    }
  
    // Find the favorite recipes of the user using their 'favorites' array
    const favoriteRecipes = await Recipe.find({
      _id: { $in: user.favorites },
    });
  
    // Respond with the favorite recipes in a JSON object
    res.status(200).json({
      favorites: favoriteRecipes,
    });
  };
  
module.exports = {
    addFavoriteHandler,
    deleteFavoriteHandler,
    getFavoritePaginationHandler,
    getFavoritesHandler
 }
  