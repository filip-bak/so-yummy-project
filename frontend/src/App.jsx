import axios from "axios";
import { lazy, useEffect } from "react";

import AuthSharedLayout from "components/AuthSharedLayout";
import SharedLayout from "components/SharedLayout";
import WelcomePage from "pages/WelcomePage";
// import AddRecipePage from "pages/AddRecipePage/AddRecipePage";
// import CategoriesPage from "pages/CategoriesPage";
// import FavoritePage from "pages/FavoritePage/FavoritePage";
// import MainPage from "pages/MainPage/MainPage";
// import MyRecipesPage from "pages/MyRecipesPage/MyRecipesPage";
// import NotFoundPage from "pages/NotFoundPage";
// import RecipePage from "pages/RecipePage/RecipePage";
// import RegisterPage from "pages/RegisterPage/RegisterPage";
// import SearchPage from "pages/SearchPage/SearchPage";
// import ShoppingListPage from "pages/ShoppingListPage/ShoppingListPage";
// import SigninPage from "pages/SigninPage/SigninPage";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/actions";
import { selectTheme } from "redux/theme/selectors";
// import RegisterPage from "pages/RegisterPage/RegisterPage";

const baseUrl = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = baseUrl;

const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const SigninPage = lazy(() => import("pages/SigninPage/SigninPage"));
const MainPage = lazy(() => import("pages/MainPage/MainPage"));
const MyRecipesPage = lazy(() => import("pages/MyRecipesPage/MyRecipesPage"));
const AddRecipePage = lazy(() => import("pages/AddRecipePage/AddRecipePage"));
const SearchPage = lazy(() => import("pages/SearchPage/SearchPage"));
const FavoritePage = lazy(() => import("pages/FavoritePage/FavoritePage"));
const RecipePage = lazy(() => import("pages/RecipePage/RecipePage"));
const ShoppingListPage = lazy(() =>
  import("pages/ShoppingListPage/ShoppingListPage")
);
const CategoriesPage = lazy(() => import("pages/CategoriesPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />

      <Route path="/" element={<AuthSharedLayout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Route>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/my" element={<MyRecipesPage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
