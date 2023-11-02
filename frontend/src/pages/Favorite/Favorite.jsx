import css from "./Favorite.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { FavoriteList } from "./components/FavoriteList/FavoriteList";

const Favorite = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="Favorites" />
        <FavoriteList />
      </div>
    </section>
  );
};

export default Favorite;
