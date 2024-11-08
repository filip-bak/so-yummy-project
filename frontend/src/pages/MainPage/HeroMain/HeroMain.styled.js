import styled from "styled-components";
import pathToDishMobileX1 from "@images/mainPage/HeroMain-dish-desktop-1x.webp";
import pathToDishMobileX2 from "@images/mainPage/HeroMain-dish-mobile-2x.webp";
import pathToDishTabletX1 from "@images/mainPage/HeroMain-dish-tablet-1x.webp";
import pathToDishTabletX2 from "@images/mainPage/HeroMain-dish-tablet-2x.webp";
import pathToDishDesktopX1 from "@images/mainPage/HeroMain-dish-desktop-1x.webp";
import pathToDishDesktopX2 from "@images/mainPage/HeroMain-dish-desktop-2x.webp";
import leafsMobileX1 from "@images/mainPage/HeroMain-leafs-mobile-1x.webp";
import leafsMobileX2 from "@images/mainPage/HeroMain-leafs-mobile-2x.webp";
import leafsTabletX1 from "@images/mainPage/HeroMain-leafs-tablet-1x.webp";
import leafsTabletX2 from "@images/mainPage/HeroMain-leafs-tablet-2x.webp";
import leafsDesktopX1 from "@images/mainPage/HeroMain-leafs-desktop-1x.webp";
import leafsDesktopX2 from "@images/mainPage/HeroMain-leafs-desktop-2x.webp";

export const Section = styled.div`
  width: 100%;
  height: 840px;
  padding-top: 132px;
  background-image: url(${leafsMobileX1}), url(${pathToDishMobileX1});
  background-size: 55px auto, 375px auto;
  background-position: 0px 100px, 100% 130px;
  background-repeat: no-repeat;
  text-align: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${leafsMobileX2}), url(${pathToDishMobileX2});
  }
  @media (min-width: 768px) {
    height: 712px;
    background-image: url(${leafsTabletX1}), url(${pathToDishTabletX1});
    text-align: start;
    background-size: 55px auto, 580px auto;
    background-position: 0px 130px, right 70px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leafsTabletX2}), url(${pathToDishTabletX2});
    }
  }
  @media (min-width: 1440px) {
    height: 900px;
    padding-top: 226px;
    background-image: url(${leafsDesktopX1}), url(${pathToDishDesktopX1});
    background-size: 100px auto, 907px auto;
    background-position: left 160px, right 74px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leafsDesktopX2}), url(${pathToDishDesktopX2});
    }
  }
`;

export const SearchBarBox = styled.div`
  & form {
    margin: 0;

    @media (min-width: 768px) {
      align-items: flex-start;
    }
  }
`;
// export const Background = styled.section`

// width: 0;
// height: 0;
// border-left: 200px solid transparent;
// border-bottom: 200px solid #EBF3D4;
// border-bottom-left-radius: 50%;

// `;

export const Title = styled.h1`
  color: var(--main-logo);
  font-style: normal;
  font-weight: 400;
  font-size: var(--fs-6xl);
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.5px;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    text-align: start;
    font-size: var(--fs-7xl);
    line-height: 72px;
  }
  @media (min-width: 1440px) {
    font-size: var(--fs-8xl);
    line-height: 1;
  }
`;

export const Span = styled.span`
  color: var(--main-logo-accent);
`;

export const TextHero = styled.p`
  display: block;
  width: 248px;
  margin-inline: auto;
  color: var(--main-color-dark);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 364px;
  font-style: normal;
  text-align: center;
  letter-spacing: -0.02em;
  @media (min-width: 768px) {
    width: 362px;
    margin-inline: 0;
    margin-bottom: 50px;
    text-align: start;
  }
  @media (min-width: 1440px) {
    width: 465px;
    font-size: 18px;
    line-height: 1.34;
  }
`;

export const CustomButtonStyles = styled.button`
  background-color: var(--button-background-secondary);
  color: var(--text-light);
  transition: background-color 0.3s ease;
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  top: 0;
  right: 0;
  bottom: 0;
  width: 113px;
  border: none;
  cursor: pointer;
  height: 52px;
  border-radius: 24px 44px;
  font-style: normal;
  line-height: 1.28;
  text-align: center;
  :hover {
    background-color: var(--button-background-primary);
  }
  :focus {
    background-color: var(--button-background-primary);
  }
  @media (min-width: 768px) {
    width: 161px;
    height: 59px;
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    height: 70px;
  }
`;

export const CustomSearchFormContainer = styled.div``;
