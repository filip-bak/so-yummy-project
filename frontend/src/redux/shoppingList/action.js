import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchShoppingList = createAsyncThunk(
  "shoppingList/fetchShoppingList",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/shopping-list`);
      return res.data.map(ingredient => ({
        image: ingredient.thb,
        name: ingredient.ttl,
        itemId: ingredient._id,
        measure: ingredient.measure,
      }));
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  "shoppingList/addRecipeToShoppingList",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`/shopping-list/add`, payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeRecipeFromShoppingList = createAsyncThunk(
  "shoppingList/removeRecipeFromShoppingList",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`/shopping-list/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
