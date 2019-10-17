export const formatImageSearchData = rawData => {
  console.log(rawData);
  const data = rawData.map(image => {
    const { id, urls } = image;

    return { id, url: urls.regular };
  });
  return data;
};
