import { createSlice } from "@reduxjs/toolkit";
import {
  addIngredientToShoppingList,
  fetchShoppingList,
  removeRecipeFromShoppingList,
} from "./action";

const handlePending = state => {
  state.isLoading = true;
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
  reducers: {
    removeFromShoppingList: {
      reducer(state, action) {
        return {
          ...state,
          items: state.items.filter(item => item.itemId !== action.payload),
        };
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, handlePending)
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchShoppingList.rejected, handleRejected)
      .addCase(addIngredientToShoppingList.pending, handlePending)
      .addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addIngredientToShoppingList.rejected, handleRejected)

      .addCase(removeRecipeFromShoppingList.pending, handlePending)
      .addCase(removeRecipeFromShoppingList.fulfilled, (state, action) => {
        state.items = state.items.filter(
          item => item._id !== action.payload._id
        );
      })
      .addCase(removeRecipeFromShoppingList.rejected, handleRejected);
  },
});

export const { removeFromShoppingList } = shoppingListSlice.actions;
export const shoppingListReducer = shoppingListSlice.reducer;
