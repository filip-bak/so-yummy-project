import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
