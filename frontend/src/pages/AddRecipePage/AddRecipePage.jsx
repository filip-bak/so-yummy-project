import css from "./AddRecipePage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { AddRecipeForm } from "./components/AddRecipeForm/AddRecipeForm";

const AddRecipesPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="Add recipe" />
        <AddRecipeForm />
      </div>
    </section>
  );
};

export default AddRecipesPage;
