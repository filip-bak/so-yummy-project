import React from "react";

import { useScreenWidth } from "../../../hooks";

import {
  SeeRecipe,
  TextSeeRecipe,
  SpanSeeRecipe,
  TextLink,
  IconSpanTextLink,
  LinkDiv,
} from "./ChooseYourBreakfast.styled";

const ChooseYourBreakfast = () => {
  const { mobile } = useScreenWidth();

  return (
    <>
      <SeeRecipe>
        {mobile && (
          <TextSeeRecipe>
            <SpanSeeRecipe>Delicious and healthy</SpanSeeRecipe> way to enjoy a
            variety of fresh ingredients in one satisfying meal
          </TextSeeRecipe>
        )}
        {!mobile && (
          <TextSeeRecipe>
            <SpanSeeRecipe>Delicious and healthy</SpanSeeRecipe> way to enjoy a
            variety of fresh ingredients in one satisfying meal
          </TextSeeRecipe>
        )}
        <LinkDiv>
          <TextLink to="/categories/Beef">
            See recipes
            <IconSpanTextLink aria-label="go to breakfast" />
          </TextLink>
        </LinkDiv>
      </SeeRecipe>
    </>
  );
};

export default ChooseYourBreakfast;
