import countries from "./allCountries.json";

export const convertISOCode = threeLetterCode => {
  const country = countries.find(country => country["alpha-3"] === threeLetterCode);
  return country["alpha-2"];
};
