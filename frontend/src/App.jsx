import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout";
import MainPage from "pages/MainPage";
import WelcomePage from "pages/WelcomePage";
import AuthSharedLayout from "components/AuthSharedLayout";
import NotFoundPage from "pages/NotFoundPage";
import SearchPage from "pages/SearchPage/SearchPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/search" element={<SearchPage />} />

      <Route path="/" element={<AuthSharedLayout />}>
        <Route path="/register" />
        <Route path="/login" />
      </Route>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        {/* OTHER ROUTES */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
