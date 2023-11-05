import css from "./AddRecipePage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { AddRecipeForm } from "./components/AddRecipeForm/AddRecipeForm";
import { FollowUs } from "./components/FollowUs/FollowUs";
import { PopularRecipe } from "./components/PopularRecipe/PopularRecipe";
import { useEffect, useState } from "react";

const AddRecipesPage = () => {
  const [showFollowUs, setShowFollowUs] = useState(false);

  useEffect(() => {
    const updateDimension = () => {
      setShowFollowUs(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", updateDimension);

    updateDimension();

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="Add recipe" />
        <div className={css.page_container}>
          <AddRecipeForm />
          <div className={css.common_container}>
            {showFollowUs && <FollowUs />}
            <PopularRecipe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRecipesPage;
