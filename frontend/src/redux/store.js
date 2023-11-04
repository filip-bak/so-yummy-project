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
import { recipeReducer } from "./recipe/slice";

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
    recipe: recipeReducer,
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
