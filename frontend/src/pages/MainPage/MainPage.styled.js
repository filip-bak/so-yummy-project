import styled from "styled-components";
import pathToDishMobileX1 from "@images/mainPage/HeroMain-dish-mobile-1x.webp";
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

export const HeroMainContainer = styled.div`
  margin-top: -64px;
  background-image: url(${leafsMobileX1}), url(${pathToDishMobileX1});
  background-size: 55px auto, 400px auto;
  background-position: 0px 10px, 100% 20px;
  background-repeat: no-repeat;
  text-align: center;
  min-height: 841px;
  padding-top: 132px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${leafsMobileX2}), url(${pathToDishMobileX2});
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    min-height: 712px;
    padding-top: 204px;
    background-image: url(${leafsTabletX1}), url(${pathToDishTabletX1});
    text-align: start;
    background-size: 55px auto, 580px auto;
    background-position: 0px 20px, right top;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leafsTabletX2}), url(${pathToDishTabletX2});
    }
  }
  @media (min-width: 1440px) {
    min-height: 900px;
    padding-top: 226px;
    background-image: url(${leafsDesktopX1}), url(${pathToDishDesktopX1});
    background-size: 100px auto, 875px auto;
    background-position: left 10px, right top;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${leafsDesktopX2}), url(${pathToDishDesktopX2});
    }
  }
`;
