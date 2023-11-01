import axios from "axios";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./recipes/slice";
import { myRecipesReducer } from "./myRecipes/slice";
import { favoriteReducer } from "./favorite/slice";
import { authReducer } from "./auth/slice";
import { categoriesReducer } from "./categories/slice";

axios.defaults.baseURL = "http://localhost:3200/api/";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    recipes: recipesReducer,
    myRecipes: myRecipesReducer,
    favorite: favoriteReducer,
    categories: categoriesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
