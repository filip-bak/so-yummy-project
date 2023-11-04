import styles from "./CategoriesPage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { CategoryRecipes } from "./components/CategoryRecipes/CategoryRecipes";
/*import { CategoryList } from "components/CategoriesPage/CategoryList/CategoryList";*/

const CategoriesPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <MainPageTitle title="Categories" />

        <CategoryRecipes />
      </div>
    </section>
  );
};

export default CategoriesPage;
