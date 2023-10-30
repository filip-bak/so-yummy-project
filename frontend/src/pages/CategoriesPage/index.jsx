import CategoriesItems from "components/CategoriesItems";
import { MainPageTitle } from "../../components/MainPageTitle/MainPageTitle";
import CategoriesList from "components/CategoriesList";
import categories from "../../Data/categoriesList.json";

const CategoriesPage = () => {
  return (
    <div>
      <MainPageTitle title="Categories" />
      <CategoriesList categories={categories} />
      <CategoriesItems />
      <div>paginacja</div>
    </div>
  );
};

export default CategoriesPage;
