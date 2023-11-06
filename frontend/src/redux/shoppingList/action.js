import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchShoppingList = createAsyncThunk(
  "shoppingList/fetchShoppingList",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/shopping-list`);
      return flattenShoppingListItems(res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const flattenShoppingListItems = result => {
  const shoppingList = [];
  result.ingredients.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      shoppingList.push({
        image: ingredient.thb,
        name: ingredient.ttl,
        id: ingredient.id,
        measure: ingredient.measure,
        recipeId: recipe.recipeId,
      });
    });
  });
  return shoppingList;
};

export const addIngredientToShoppingList = createAsyncThunk(
  "shoppingList/addRecipeToShoppingList",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`/shopping-list/add`, payload);
      const res = await axios.get(`/shopping-list`);
      return flattenShoppingListItems(res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeIngredientFromShoppingList = createAsyncThunk(
  "shoppingList/removeRecipeFromShoppingList",
  async ({ recipeId, ingredientId }, thunkAPI) => {
    try {
      await axios.delete(`/shopping-list/${ingredientId}/${recipeId}`);
      const res = await axios.get(`/shopping-list`);
      return flattenShoppingListItems(res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
