import { Suspense, useEffect } from "react";

import ChooseYourBreakfast from "./ChooseYourBreakfast";
import HeroMain from "./HeroMain";

import { useDispatch } from "react-redux";
import { fetchRecipesForMainPage } from "redux/recipes/actions";
import { HeroMainContainer } from "./MainPage.styled";
import MainRecipes from "./MainRecipes";
import Loader from "components/Loader";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesForMainPage());
  }, [dispatch]);

  return (
    <>
      <HeroMainContainer>
        <HeroMain />
        <ChooseYourBreakfast />
      </HeroMainContainer>
      <MainRecipes />
    </>
  );
};
export default MainPage;
