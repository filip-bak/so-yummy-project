import styles from "./CategoriesPage.module.css";
import { MainPageTitle } from "@components/MainPageTitle/MainPageTitle";
import { CategoryRecipes } from "./components/CategoryRecipes/CategoryRecipes";
import { useDispatch } from "react-redux";
import { fetchRecipesCategoryList } from "@redux/recipes/actions";
import { useEffect } from "react";
import { setResultsPerPage } from "@redux/recipes/slice";

const CategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesCategoryList());
    dispatch(setResultsPerPage(8));
    // eslint-disable-next-line
  }, []);

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
