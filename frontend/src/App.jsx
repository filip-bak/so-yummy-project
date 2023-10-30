import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout";
import MainPage from "pages/MainPage";
import WelcomePage from "pages/WelcomePage";
import AuthSharedLayout from "components/AuthSharedLayout";
import NotFoundPage from "pages/NotFoundPage";
import SearchPage from "pages/SearchPage/SearchPage";
import CategoriesPage from "pages/CategoriesPage";
import CategoriesDetails from "components/CategoriesDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />

      <Route path="/" element={<AuthSharedLayout />}>
        <Route path="/register" />
        <Route path="/login" />
      </Route>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoriesDetails />} />
        {/* OTHER ROUTES */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
