import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const testData = [
  {
    id: "640cd5ac2d9fecf12e8897fc",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897ee",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897f0",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897fd",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897ef",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897f1",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897fe",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897eg",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897f2",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897ff",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897eh",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "640cd5ac2d9fecf12e8897f3",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
  /////////////////////////////////////////////////////
  {
    id: "1",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "2",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "3",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
  {
    id: "4",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "5",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "6",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
  {
    id: "7",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "8",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "9",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
  {
    id: "10",
    title: "Spaghetti Bolognese",
    thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
  },
  {
    id: "11",
    title: "Bakewell tart",
    category: "Dessert",
    thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
  },
  {
    id: "12",
    title: "Teriyaki Chicken Casserole",
    thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
  },
];

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = testData;
      const recipes = response.map(item => ({
        title: item.title,
        image: item.thumb,
        id: item.id,
      }));
      return {
        currentPage: 1,
        recipes,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesNewPage = createAsyncThunk(
  "recipes/fetchNewPage",
  async ({ newCurrentPage }, thunkAPI) => {
    try {
      const response = testData;
      const recipes = response.map(item => ({
        title: item.title,
        image: item.thumb,
        id: item.id,
      }));
      return {
        currentPage: newCurrentPage,
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

export const fetchRecipesById = createAsyncThunk(
  "recipes/fetchRecipesById",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/recipe/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesByCategory",
  async (category, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/${category}`);
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
      const res = await axios.get(`/recipes/category-list`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
