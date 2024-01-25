export const getImageUrl = (path) => {
    return new URL(`/asset/${path}`, import.meta.url).href;
  };
  