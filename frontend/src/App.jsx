import axios from "axios";
import AuthSharedLayout from "components/AuthSharedLayout";
import SharedLayout from "components/SharedLayout";
import CategoriesPage from "pages/CategoriesPage";
import FavoritePage from "pages/FavoritePage/FavoritePage";
import MainPage from "pages/MainPage/MainPage";
import MyRecipesPage from "pages/MyRecipesPage/MyRecipesPage";
import NotFoundPage from "pages/NotFoundPage";
import RecipePage from "pages/RecipePage/RecipePage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import SearchPage from "pages/SearchPage/SearchPage";
import ShoppingListPage from "pages/ShoppingListPage/ShoppingListPage";
import SigninPage from "pages/SigninPage/SigninPage";
import WelcomePage from "pages/WelcomePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "redux/auth/actions";
import { selectTheme } from "redux/theme/selectors";
// import { selectIsRefreshing } from "redux/auth/selectors";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

axios.defaults.baseURL = baseUrl;

export const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
  }, [theme]);

  // if (isRefreshing)
  //   return (
  //     <Loader
  //       wrapperClass={"main-loader"}
  //       height={200}
  //       width={200}
  //       visible={true}
  //     />
  //   );

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
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
