import { createSlice } from "@reduxjs/toolkit";
import {
  addIngredientToShoppingList,
  fetchShoppingList,
  removeIngredientFromShoppingList,
} from "./action";

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, handlePending)
      .addCase(fetchShoppingList.fulfilled, handleFulfilled)
      .addCase(fetchShoppingList.rejected, handleRejected)
      .addCase(addIngredientToShoppingList.pending, handlePending)
      .addCase(addIngredientToShoppingList.fulfilled, handleFulfilled)
      .addCase(addIngredientToShoppingList.rejected, handleRejected)

      .addCase(removeIngredientFromShoppingList.pending, handlePending)
      .addCase(removeIngredientFromShoppingList.fulfilled, handleFulfilled)
      .addCase(removeIngredientFromShoppingList.rejected, handleRejected);
  },
});

export const { removeFromShoppingList } = shoppingListSlice.actions;
export const shoppingListReducer = shoppingListSlice.reducer;
