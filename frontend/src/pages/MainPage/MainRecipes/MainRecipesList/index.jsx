import { RecipeItem } from "components/RecipeItem/RecipeItem";
import MainTitle from "../MainTitle";
import styles from "./MainRecipesList.module.css";
import Button from "components/Button";
import useRecipeMediaLayout from "../../../../hooks/useRecipeMediaLayout";
import { useNavigate } from "react-router-dom";
import { selectRecipes } from "redux/recipes/selectors";
import { useSelector } from "react-redux";

const MainRecipesList = () => {
  const recipes = useSelector(selectRecipes);

  const categories = Object.keys(recipes);
  const recipeLayoutNumber = useRecipeMediaLayout();
  const navigate = useNavigate();

  const navigateHandle = categoryName => {
    navigate(`/categories/${categoryName.toLowerCase()}`);
  };

  return (
    <>
      {categories?.map(category => (
        <div key={category}>
          <div className={styles.box}>
            <MainTitle title={category} className={styles.title} />
            <ul className={styles.list}>
              {Array.isArray(recipes[category]) &&
                recipes[category]
                  .slice(0, recipeLayoutNumber)
                  ?.map(({ _id, title, preview }) => (
                    <RecipeItem
                      key={_id}
                      title={title}
                      image={preview}
                      recipeId={_id}
                    />
                  ))}
            </ul>
          </div>
          <div className={styles["btn-box"]}>
            <Button
              variant="secondary"
              size="small"
              onClick={() => navigateHandle(category)}
            >
              See all
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainRecipesList;
