import { useSelector } from "react-redux";
import css from "./MyRecipes.module.css";
import { selectMyRecipes } from "redux/myRecipes/selectors";
import { MyRecipeItem } from "pages/MyRecipesPage/components/MyRecipeItem/MyRecipeItem";
import { Pagination } from "components/Pagination/Pagination";
import defaultImage from "images/defaults/defaultImageStandard.jpg";

export const MyRecipes = () => {
  const myRecipes = useSelector(selectMyRecipes);
  const resultsPerPage = 4;

  return (
    <div className={css.container}>
      <ul className={css.results}>
        {myRecipes.map(({ preview, _id, title, description, time }) => (
          <MyRecipeItem
            image={preview || defaultImage}
            key={_id}
            id={_id}
            title={title}
            description={description}
            time={time}
          />
        ))}
      </ul>
      {myRecipes.length > resultsPerPage && (
        <Pagination
          recipesCount={myRecipes.length}
          resultsPerPage={resultsPerPage}
        />
      )}
    </div>
  );
};
