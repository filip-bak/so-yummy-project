import css from "./ShoppingListPage.module.css";
import { MainPageTitle } from "@components/MainPageTitle/MainPageTitle";
import { ShoppingList } from "./components/ShoppingList/ShoppingList";

const ShoppingListPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MainPageTitle title="Shopping list" />
        <ShoppingList />
      </div>
    </section>
  );
};

export default ShoppingListPage;
