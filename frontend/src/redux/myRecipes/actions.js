import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const testData = [
  {
    id: "11",
    title: "Apple Frangipan Tart",
    instructions:
      "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
    description: "A delicious tart made with almond cream and fresh apples.",
    thumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Apple%20Frangipan%20Tart.jpg",
    time: "50",
  },
  {
    id: "12",
    title: "Potato Gratin with Chicken",
    instructions:
      "15 minute potato gratin with chicken and bacon greens: a gratin always seems more effort and more indulgent than ordinary boiled or roasts, but it doesn't have to take 45mins, it's nice for a change and you can control the calorie content by going with full fat to low fat creme fraiche. (It's always tastes better full fat though obviously!) to serve 4: use 800g of potatoes, finely slice and boil in a pan for about 5-8 mins till firmish, not soft. Finely slice 3 onions and place in an oven dish with 2 tblsp of olive oil and 100ml of chicken stock. Cook till the onions are soft then drain the potatoes and pour onto the onions. Season and spoon over cream or creme fraiche till all is covered but not swimming. Grate Parmesan over the top then finish under the grill till nicely golden. serve with chicken and bacon, peas and spinach.",
    description:
      "A French-inspired dish made with sliced potatoes, chicken, cream, garlic, and cheese, baked until golden and bubbly.",
    thumb: "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Potato%20Gratin%20with%20Chicken.jpg",
    time: "20",
  },
  {
    id: "13",
    title: "Apple Frangipan Tart",
    instructions:
      "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
    description: "A delicious tart made with almond cream and fresh apples.",
    thumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Apple%20Frangipan%20Tart.jpg",
    time: "50",
  },
  {
    id: "14",
    title: "Potato Gratin with Chicken",
    instructions:
      "15 minute potato gratin with chicken and bacon greens: a gratin always seems more effort and more indulgent than ordinary boiled or roasts, but it doesn't have to take 45mins, it's nice for a change and you can control the calorie content by going with full fat to low fat creme fraiche. (It's always tastes better full fat though obviously!) to serve 4: use 800g of potatoes, finely slice and boil in a pan for about 5-8 mins till firmish, not soft. Finely slice 3 onions and place in an oven dish with 2 tblsp of olive oil and 100ml of chicken stock. Cook till the onions are soft then drain the potatoes and pour onto the onions. Season and spoon over cream or creme fraiche till all is covered but not swimming. Grate Parmesan over the top then finish under the grill till nicely golden. serve with chicken and bacon, peas and spinach.",
    description:
      "A French-inspired dish made with sliced potatoes, chicken, cream, garlic, and cheese, baked until golden and bubbly.",
    thumb: "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Potato%20Gratin%20with%20Chicken.jpg",
    time: "20",
  },
  {
    id: "15",
    title: "Apple Frangipan Tart",
    instructions:
      "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
    description: "A delicious tart made with almond cream and fresh apples.",
    thumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Apple%20Frangipan%20Tart.jpg",
    time: "50",
  },
  {
    id: "16",
    title: "Potato Gratin with Chicken",
    instructions:
      "15 minute potato gratin with chicken and bacon greens: a gratin always seems more effort and more indulgent than ordinary boiled or roasts, but it doesn't have to take 45mins, it's nice for a change and you can control the calorie content by going with full fat to low fat creme fraiche. (It's always tastes better full fat though obviously!) to serve 4: use 800g of potatoes, finely slice and boil in a pan for about 5-8 mins till firmish, not soft. Finely slice 3 onions and place in an oven dish with 2 tblsp of olive oil and 100ml of chicken stock. Cook till the onions are soft then drain the potatoes and pour onto the onions. Season and spoon over cream or creme fraiche till all is covered but not swimming. Grate Parmesan over the top then finish under the grill till nicely golden. serve with chicken and bacon, peas and spinach.",
    description:
      "A French-inspired dish made with sliced potatoes, chicken, cream, garlic, and cheese, baked until golden and bubbly.",
    thumb: "https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Potato%20Gratin%20with%20Chicken.jpg",
    time: "20",
  },
];

export const fetchMyRecipes = createAsyncThunk(
  "myRecipes/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/recipes/my/own");

      return {
        currentPage: 1,
        myRecipes: data.recipes,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMyRecipesNewPage = createAsyncThunk(
  "myRecipes/fetchNewPage",
  async ({ newCurrentPage }, thunkAPI) => {
    try {
      const response = testData;
      const myRecipes = response.map(item => ({
        title: item.title,
        image: item.thumb,
        id: item.id,
        description: item.description,
        time: item.time,
      }));
      return {
        currentPage: newCurrentPage,
        myRecipes,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addMyRecipe = createAsyncThunk(
  "favorite/addMyRecipe",
  async (recipieData, thunkAPI) => {
    try {
      const res = await axios.post(`/ownRecipes`, recipieData);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeMyRecipe = createAsyncThunk(
  "favorite/removeMyRecipe",
  async (myRecipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`/recipes/recipe/${myRecipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
