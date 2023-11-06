import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRecipes,
  fetchRecipesByCategory,
  fetchRecipesCategoryList,
  fetchRecipesForMainPage,
} from "./actions";

const initialState = {
  items: [],
  categories: [],
  isLoading: false,
  error: null,
  resultsPerPage: 12,
  totalCount: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: initialState,
  reducers: {
    setQueryType: {
      reducer(state, action) {
        return {
          ...state,
          queryType: action.payload,
        };
      },
    },
    setResultsPerPage: {
      reducer(state, action) {
        return {
          ...state,
          resultsPerPage: action.payload,
        };
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.recipes;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchRecipes.rejected, handleRejected)

      .addCase(fetchRecipesForMainPage.pending, handlePending)
      .addCase(fetchRecipesForMainPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchRecipesForMainPage.rejected, handleRejected)
      .addCase(fetchRecipesByCategory.pending, handlePending)
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchRecipesByCategory.rejected, handleRejected)

      .addCase(fetchRecipesCategoryList.pending, handlePending)
      .addCase(fetchRecipesCategoryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchRecipesCategoryList.rejected, handleRejected);
  },
});

export const { setQueryType, setResultsPerPage } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
