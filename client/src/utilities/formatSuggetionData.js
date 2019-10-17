export const formatSuggestionData = rawData => {
  //SIMPLIFY THIS CODE
  const results = rawData.map(location => mapLocationDetails(location));
  // .filter(location => location.is_city);
  // .reduce((unique, current) => {
  //   if (unique.some(location => location.city == current.city)) {
  //     return unique;
  //   } else {
  //     return [...unique, current];
  //   }
  // }, []);
  const data = mapLocationsToCountry(results);
  return data;
};

const mapLocationDetails = location => {
  const { country_code, country, is_city, locale_names, _geoloc, _highlightResult, objectID, administrative } = location;
  // const { address, locationId, label, countryCode} = location;
  const district = administrative.join(" ,");
  const country_desc = country.en || country.default;
  const title = locale_names.default[0];
  const label = [title, district, country_desc].join(" ,");
  return {
    title,
    description: district,
    label,
    is_city,
    country: country_desc,
    country_code: country_code,
    loc: { lat: _geoloc.lat, lon: _geoloc.lng },
    key: objectID
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
