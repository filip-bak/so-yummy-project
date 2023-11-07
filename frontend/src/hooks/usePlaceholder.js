import { useSelector } from "react-redux";

const usePlaceholderImage = (image, placeholderImageURL, isLoadingSelector) => {
  const isLoading = useSelector(isLoadingSelector);
  const isNoImg = image === "thumb";

  return isLoading || isNoImg ? placeholderImageURL : image;
};

export default usePlaceholderImage;
