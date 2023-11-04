import React from "react";

import HeroMain from "../../components/HeroMain";
import ChooseYourBreakfast from "../../components/ChooseYourBreakfast";

import { HeroMainContainer } from "./MainPage.styled";

const MainPage = () => {
  return (
    <HeroMainContainer>
      <HeroMain />
      <ChooseYourBreakfast />
    </HeroMainContainer>
  );
};
export default MainPage;
