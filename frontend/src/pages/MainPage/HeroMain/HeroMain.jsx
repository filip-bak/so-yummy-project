import { useNavigate } from "react-router-dom";
import { useScreenWidth } from "../../../hooks";

import Container from "../Container";

import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchBarBox, Span, TextHero, Title } from "./HeroMain.styled";

export const HeroMain = () => {
  const { mobile } = useScreenWidth();
  const navigate = useNavigate();

  const handleSearchFormInput = searchParams => {
    const query = searchParams.get("query");
    navigate(`/search?query=${query}&queryType=query`);
  };

  return (
    <Container>
      <Title>
        <Span>So</Span>Yummy
      </Title>
      {mobile && (
        <TextHero>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </TextHero>
      )}
      {!mobile && (
        <TextHero>
          "What to cook?" is not only a recipe app, it is, in fact,
          <br />
          your cookbook. You can add your own recipes to
          <br />
          save them for the future.
        </TextHero>
      )}

      <SearchBarBox>
        <SearchBar dark={true} onSubmit={handleSearchFormInput} />
      </SearchBarBox>
    </Container>
  );
};
