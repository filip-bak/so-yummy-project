export const selectMyRecipes = state => {
  return state.myRecipes.items;
};
export const selectIsLoading = state => state.myRecipes.isLoading;
export const selectError = state => state.myRecipes.error;
export const selectCurrentPage = state => state.myRecipes.currentPage;
