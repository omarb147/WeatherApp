import * as TYPES from "../../Constants/Types";
import Cookies from "js-cookie";

//TURN THIS INTO A HOC!!
export const selectResult = (result, props) => {
  const { loc } = result;
  props.selectLocation(result);
  setCookie(result);
  getBackgroundImage(result, props);
  props.getWeatherByLocation(loc, TYPES.DAILY);
  props.getWeatherByLocation(loc, TYPES.HOURLY);
  props.editSearchQuery(result.label);
};

const getBackgroundImage = (selectedLocation, props) => {
  const { images, getImageForForecast } = props;
  const { location_key, title, country } = selectedLocation;
  const locationQuery = `${title}, ${country}`;

  if (!images[location_key]) {
    getImageForForecast(locationQuery, location_key);
  }
};

const setCookie = selectedLocation => {
  const searchedLocationsCookie = Cookies.get(TYPES.SEARCH_COOKIE);
  const { location_key, title, country_code } = selectedLocation;

  //refactor this code?
  if (searchedLocationsCookie) {
    const searchedLocations = JSON.parse(searchedLocationsCookie);
    const location = searchedLocations[location_key];
    if (!location) {
      const upperCountryCode = country_code.toUpperCase();
      const searchTitle = `${title},${upperCountryCode}`;
      return Cookies.set(TYPES.SEARCH_COOKIE, { ...searchedLocations, [location_key]: { ...selectedLocation, value: 1, searchTitle } });
    }

    const updatedLocation = { ...location, value: (location.value += 1) };
    Cookies.set(TYPES.SEARCH_COOKIE, { ...searchedLocations, [location_key]: updatedLocation });
  } else {
    const upperCountryCode = country_code.toUpperCase();
    const searchTitle = `${title},${upperCountryCode}`;
    Cookies.set(TYPES.SEARCH_COOKIE, { [location_key]: { ...selectedLocation, value: 1, searchTitle } });
  }
};
