import { MainPageTitle } from "../../components/MainPageTitle/MainPageTitle";
import CategoriesList from "components/CategoriesList";
import categories from "../../Data/categoriesList.json";

const CategoriesDetails = () => {
  return (
    <div>
      <MainPageTitle title="Categories" />
      <CategoriesList categories={categories} />
    </div>
  );
};

export default CategoriesDetails;
