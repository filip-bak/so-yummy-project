import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRecipe = createAsyncThunk(
  "recipe/addRecipe",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`/recipes/`, payload);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  "recipe/fetchRecipeById",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/recipe/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// The query bellow is used in the AddIngredient form, which uses local state instead of Redux
export const fetchIngredients = async query => {
  try {
    const res = await axios.get(`/ingredients?query=${query}`);
    return res.data;
  } catch (e) {
    console.error(e.message);
    throw e;
  }
};
