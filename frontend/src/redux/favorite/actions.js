import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavorite = createAsyncThunk(
  "favorite/fetchAll",
  async (currentPage, thunkAPI) => {
    try {
      const { data } = await axios.get(`/favorite/paginate?${currentPage}`);
      return {
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        favorite: data.favorites,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchNewFavoritePage = createAsyncThunk(
//   "favorite/fetchNewPage",
//   async ({ newCurrentPage }, thunkAPI) => {
//     try {
//       const response = testData;
//       const favorite = response.map(item => ({
//         title: item.title,
//         image: item.thumb,
//         id: item.id,
//         description: item.description,
//         time: item.time,
//       }));
//       return {
//         currentPage: newCurrentPage,
//         favorite,
//       };
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const addToFavorite = createAsyncThunk(
  "favorite/addToFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.post(`/favorite/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromFavorite = createAsyncThunk(
  "favorite/removeFromFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`/favorite/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
