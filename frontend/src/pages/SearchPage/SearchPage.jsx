import css from "./SearchPage.module.css";
import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchType } from "pages/SearchPage/components/SearchType/SearchType";
import { SearchedRecipesList } from "pages/SearchPage/components/SearchedRecipesList/SearchedRecipesList";

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
