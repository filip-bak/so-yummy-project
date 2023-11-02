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
import { shoppingListReducer } from "./shoppingList/slice";
import { themeReducer } from "./theme/slice";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistThemeConfig = {
  key: "theme",
  storage,
  whitelist: ["status"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    theme: persistReducer(persistThemeConfig, themeReducer),
    recipes: recipesReducer,
    myRecipes: myRecipesReducer,
    favorite: favoriteReducer,
    shoppingList: shoppingListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
