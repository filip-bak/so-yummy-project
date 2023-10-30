import css from "./MyRecipesPage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { MyRecipes } from "components/MyRecipes/MyRecipes";
import { Pagination } from "components/Pagination/Pagination";

const MyRecipesPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="My recipes" />
        <MyRecipes />
        <Pagination />
      </div>
    </section>
  );
};

export default MyRecipesPage;
