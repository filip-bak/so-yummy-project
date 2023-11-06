import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchAll",
  async ({ query, queryType, currentPage, resultsPerPage }, thunkAPI) => {
    try {
      const fieldName = queryType === "query" ? "title" : "ingredient";
      const params = {
        [fieldName]: query,
        page: currentPage,
        resultsPerPage,
      };
      const response = await axios.get(`/recipes`, {
        params,
      });

      const recipes = response.data.recipes.map(item => ({
        title: item.title,
        image: item.thumb,
        id: item.id,
      }));
      return {
        totalCount: response.data.totalCount,
        recipes,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesForMainPage = createAsyncThunk(
  "recipes/fetchRecipesForMainPage",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/recipes/main-page");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesByCategory",
  async ({ category, currentPage }, thunkAPI) => {
    try {
      const params = {
        page: currentPage,
      };

      const res = await axios.get(`/recipes/${category}`, {
        params,
      });

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesCategoryList = createAsyncThunk(
  "recipes/fetchRecipesCategoryList",
  async (_, thunkAPI) => {
    try {
      console.log("Rozpoczęcie żądania API");
      const res = await axios.get(`/recipes/category-list`);
      console.log("Odpowiedź z API:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
