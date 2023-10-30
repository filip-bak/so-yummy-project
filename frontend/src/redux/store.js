import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { recipesReducer } from "./recipes/slice";

export const store = configureStore({
  reducer: { recipes: recipesReducer },
});

export const persistor = store;
