import css from "./SearchPage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchType } from "components/SearchType/SearchType";
import { SearchedRecipesList } from "components/SearchedRecipesList/SearchedRecipesList";

const SearchPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="Search" />
        <SearchBar>
          <SearchType />
        </SearchBar>
        <SearchedRecipesList />
      </div>
    </section>
  );
};

export default SearchPage;
