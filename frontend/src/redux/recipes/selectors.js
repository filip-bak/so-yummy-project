export const selectRecipes = state => state.recipes.items;
export const selectCategories = state => state.recipes.categories;
export const selectResultsPerPage = state => state.recipes.resultsPerPage;
export const selectTotalPages = state => state.recipes.totalCount;
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;
export const selectCurrentPage = state => state.recipes.currentPage;
