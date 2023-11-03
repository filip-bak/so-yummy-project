import css from "./CategoriesPage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { CategoryRecipes } from "components/CategoriesPage/CategoryRecipes/CategoryRecipes";
/*import { CategoryList } from "components/CategoriesPage/CategoryList/CategoryList";*/

const CategoriesPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="Categories" />

        <CategoryRecipes />
      </div>
    </section>
  );
};

export default CategoriesPage;
