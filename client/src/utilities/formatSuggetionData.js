export const formatSuggestionData = rawData => {
  //SIMPLIFY THIS CODE
  const results = rawData
    .map(location => mapLocationDetails(location))
    .filter(location => location.district)
    .reduce((unique, current) => {
      if (unique.some(location => location.city == current.city)) {
        return unique;
      } else {
        return [...unique, current];
      }
    }, []);

  const data = mapLocationsToCountry(results);
  return data;
};

const mapLocationDetails = location => {
  const { address, locationId, label, countryCode } = location;

  const splitLabel = label.split(",");
  const splitLabelLength = splitLabel.length;
  const labelArr = splitLabel.slice(1, splitLabelLength).join(",");

  return {
    title: address.district,
    label,
    description: labelArr,
    country: address.country,
    country_code: countryCode,
    district: address.district,
    city: address.city,
    key: locationId
  };
};

const mapLocationsToCountry = locations => {
  const results = {};
  locations.forEach(location => {
    const { country } = location;
    if (results[country]) {
      let resultsArr = [...results[country].results, location];
      results[country] = { ...results[country], results: resultsArr };
    } else {
      results[country] = { name: country, results: [location] };
    }
  });
  return results;
};
