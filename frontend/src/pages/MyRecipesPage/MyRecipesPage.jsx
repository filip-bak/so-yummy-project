import css from "./MyRecipesPage.module.css";
import { MainPageTitle } from "@components/MainPageTitle/MainPageTitle";
import { MyRecipesList } from "./components/MyRecipesList/MyRecipesList";

const MyRecipesPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="My recipes" />
        <MyRecipesList />
      </div>
    </section>
  );
};

export default MyRecipesPage;
