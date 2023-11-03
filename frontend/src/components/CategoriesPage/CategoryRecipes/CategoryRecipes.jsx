/*import { CardMeal } from "components/CardMeal/CardMeal";
import styles from "./CategoryRecipes.module.css";*/
import {
  fetchRecipesByCategory,
  fetchRecipesCategoryList,
} from "redux/recipes/actions";
import { selectRecipes, selectCategories } from "redux/recipes/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const CategoryRecipes = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const categoryList = useSelector(selectCategories);
  const items = useSelector(selectRecipes);

  useEffect(() => {
    dispatch(fetchRecipesCategoryList());
    dispatch(fetchRecipesByCategory(categoryName));
  }, [dispatch, categoryName]);

  console.log("recipes from component categoryrecipes", items.recipes);
  console.log(categoryName);

  return (
    <div>
      <ul>
        {categoryList.map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <hr></hr>
      <ul>
        {items.recipes?.map(el => (
          <li key={el._id}>{el.area}</li>
        ))}
      </ul>
    </div>
  );
};
