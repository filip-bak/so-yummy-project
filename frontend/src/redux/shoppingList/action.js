import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addRecipeToShoppingList = createAsyncThunk(
  "shoppingList/removeRecipieFromShoppingList",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.post(`/shopping-list/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const removeRecipieFromShoppingList = createAsyncThunk(
  "shoppingList/removeRecipieFromShoppingList",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`/shopping-list/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
