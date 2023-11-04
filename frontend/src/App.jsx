import axios from "axios";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout";
import MainPage from "pages/MainPage";
import WelcomePage from "pages/WelcomePage";
import AuthSharedLayout from "components/AuthSharedLayout";
import NotFoundPage from "pages/NotFoundPage";
import SearchPage from "pages/SearchPage/SearchPage";
import MyRecipesPage from "pages/MyRecipesPage/MyRecipesPage";
import FavoritePage from "pages/FavoritePage/FavoritePage";
import ShoppingListPage from "pages/ShoppingListPage/ShoppingListPage";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/theme/selectors";
import { useEffect } from "react";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import SigninPage from "pages/SigninPage/SigninPage";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

axios.defaults.baseURL = baseUrl;

export const App = () => {
  const theme = useSelector(selectTheme);

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
        <Route path="/add" />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/categories/:categoryName" />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
