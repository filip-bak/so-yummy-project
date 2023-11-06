const { useMediaQuery } = require("@mui/material");

const useRecipeMediaLayout = () => {
  const isTablet = useMediaQuery("(min-width:765px) and (max-width:1439px)");
  const isDesktop = useMediaQuery("(min-width:1440px)");

  if (isDesktop) {
    return 4;
  }
  if (isTablet) {
    return 2;
  }
  return 1;
};

export default useRecipeMediaLayout;
