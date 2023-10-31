import { MainPageTitle } from "../../components/MainPageTitle/MainPageTitle";
import CategoriesList from "components/CategoriesList";
import categories from "../../Data/categoriesList.json";
import { useParams } from "react-router-dom";

const CategoriesDetails = () => {
  const { category } = useParams();
  const filteredDishes = categories.filter(val => val.category === category);

  return (
    <div>
      <MainPageTitle title="Categories" />
      <CategoriesList categories={categories} />
      <div>
        {filteredDishes.map(dish => (
          <div key={dish._id}>{dish.title}</div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetails;
