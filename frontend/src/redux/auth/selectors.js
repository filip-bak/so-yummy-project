export const selectUser = state => state.auth.user;
export const selectToken = state => (state.auth.token !== null ? true : false);
export const selectAvatarUrl = state => state.auth.avatar;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.isError;

export const selectGlobalLoading = state => {
  return (
    state.auth.isLoading ||
    state.recipe.isLoading ||
    state.recipes.isLoading ||
    state.favorite.isLoading ||
    state.myRecipes.isLoading ||
    state.shoppingList.isLoading
  );
};
