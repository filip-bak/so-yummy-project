import styles from "./Main.Recipes.module.css";
import MainRecipesList from "./MainRecipesList";

const MainRecipes = () => {
  return (
    <main className={styles.container}>
      <MainRecipesList />
    </main>
  );
};

export default MainRecipes;
