export const selectShoppingList = state => {
  return state.shoppingList.items;
};
export const selectIsLoading = state => state.shoppingList.isLoading;
export const selectError = state => state.ShoppingList.error;
