// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const testData = [
//   {
//     id: "640cd5ac2d9fecf12e8897fc",
//     title: "Spaghetti Bolognese",
//     thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897ee",
//     title: "Bakewell tart",
//     category: "Dessert",
//     thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
//     preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897f0",
//     title: "Teriyaki Chicken Casserole",
//     thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897fd",
//     title: "Spaghetti Bolognese",
//     thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897ef",
//     title: "Bakewell tart",
//     category: "Dessert",
//     thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
//     preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897f1",
//     title: "Teriyaki Chicken Casserole",
//     thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897fe",
//     title: "Spaghetti Bolognese",
//     thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897eg",
//     title: "Bakewell tart",
//     category: "Dessert",
//     thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
//     preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897f2",
//     title: "Teriyaki Chicken Casserole",
//     thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897ff",
//     title: "Spaghetti Bolognese",
//     thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Spaghetti%20Bolognese.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897eh",
//     title: "Bakewell tart",
//     category: "Dessert",
//     thumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
//     preview: "https://ftp.goit.study/img/so-yummy/preview/Bakewell%20tart.jpg",
//   },
//   {
//     id: "640cd5ac2d9fecf12e8897f3",
//     title: "Teriyaki Chicken Casserole",
//     thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
//     preview:
//       "https://ftp.goit.study/img/so-yummy/preview/Teriyaki%20Chicken%20Casserole.jpg",
//   },
// ];

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = [];
      return response.map(item => ({
        title: item.title,
        image: item.thumb,
        id: item.id,
      }));
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
