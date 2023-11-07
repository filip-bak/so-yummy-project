const usePlaceholderImage = (image, placeholderImageURL) => {
  const isNoImg = image === "thumb";

  return isNoImg ? placeholderImageURL : image;
};

export default usePlaceholderImage;
