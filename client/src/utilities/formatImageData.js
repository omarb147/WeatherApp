export const formatImageSearchData = rawData => {
  const data = rawData.map(image => {
    const { id, urls } = image;

    return { id, url: urls.regular };
  });
  return data;
};
