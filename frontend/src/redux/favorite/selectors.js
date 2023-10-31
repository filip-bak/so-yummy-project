export const selectFavorite = state => {
  return state.favorite.items;
};
export const selectIsLoading = state => state.favorite.isLoading;
export const selectError = state => state.favorite.error;
export const selectCurrentPage = state => state.favorite.currentPage;
