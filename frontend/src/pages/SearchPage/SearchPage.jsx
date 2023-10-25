import css from "./SearchPage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchedRecipesList } from "components/SearchedRecipesList/SearchedRecipesList";

const SearchPage = () => {
  return (
    <div className={css.container}>
      <MainPageTitle title="Search" />
      <SearchBar />
      <SearchedRecipesList />
    </div>
  );
};

export default SearchPage;
