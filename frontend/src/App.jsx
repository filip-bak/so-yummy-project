import axios from "axios";
import { useEffect } from "react";

import AuthSharedLayout from "components/AuthSharedLayout";
import SharedLayout from "components/SharedLayout";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/actions";
import { selectTheme } from "redux/theme/selectors";
import { lazy } from "react";
import PrivateRoute from "LayoutRoutes/PrivateRoute";
import RestrictedRoute from "LayoutRoutes/RestrictedRoute";
import { ToastContainer } from "react-toastify";

const baseUrl = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = baseUrl;

const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const WelcomePage = lazy(() => import("pages/WelcomePage"));
const CategoriesPage = lazy(() => import("pages/CategoriesPage"));
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
    <>
      <Routes>
        <Route
          path="/welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />

        <Route path="/" element={<AuthSharedLayout />}>
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path="/signin"
            element={<RestrictedRoute component={<SigninPage />} />}
          />
        </Route>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PrivateRoute component={<MainPage />} />} />
          <Route
            path="/my"
            element={<PrivateRoute component={<MyRecipesPage />} />}
          />
          <Route
            path="/add"
            element={<PrivateRoute component={<AddRecipePage />} />}
          />
          <Route
            path="/search"
            element={<PrivateRoute component={<SearchPage />} />}
          />
          <Route
            path="/favorite"
            element={<PrivateRoute component={<FavoritePage />} />}
          />
          <Route
            path="/recipes/:recipeId"
            element={<PrivateRoute component={<RecipePage />} />}
          />
          <Route
            path="/shopping-list"
            element={<PrivateRoute component={<ShoppingListPage />} />}
          />
          <Route
            path="/categories/:categoryName"
            element={<PrivateRoute component={<CategoriesPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        limit={3}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </>
  );
};
