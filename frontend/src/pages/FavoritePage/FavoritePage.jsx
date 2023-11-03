import css from "./FavoritePage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { FavoriteList } from "./components/FavoriteList/FavoriteList";

const FavoritePage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="Favorites" />
        <FavoriteList />
      </div>
    </section>
  );
};

export default FavoritePage;
