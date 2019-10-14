import * as TYPES from "../../Constants/Types";
import { getWeatherAPI } from "../../services/weatherApi";
import { autocompleteAPI } from "../../services/LocationAPI";
import { formatDailyWeatherData, formatHourlyWeatherData, formatSuggestionData } from "../../utilities";

//WEATHER API ACTIONS
export const getWeatherByLocation = (location, period) => {
  return async dispatch => {
    dispatch(getWeatherByLocationLoading(period));

    await getWeatherAPI(location, period, (res, error) => {
      if (error) {
        return dispatch(getWeatherByLocationError(period));
      }
      //TODO: DATA MANIPULATION ON RESUTLT
      let data;

      if (period === TYPES.DAILY) {
        data = formatDailyWeatherData(res);
      } else {
        data = formatHourlyWeatherData(res);
      }
      return dispatch(getWeatherByLocationComplete(period, data));
    });
  };
};

export const getWeatherByLocationLoading = period => {
  return { type: TYPES.GET_WEATHER_BY_LOCATION_LOADING, period };
};

export const getWeatherByLocationError = (period, error) => {
  return { type: TYPES.GET_WEATHER_BY_LOCATION_ERROR, period, error };
};

export const getWeatherByLocationComplete = (period, data) => {
  return { type: TYPES.GET_WEATHER_BY_LOCATION_COMPLETE, period, data };
};

//AUTOCOMPLETE API ACTIONS
export const getAutocompleteSuggestions = query => {
  return dispatch => {
    dispatch(getAutocompleteSuggestionsLoading());

    if (query.length < 4) return dispatch(getAutocompleteNullSearch());

    setTimeout(async () => {
      await autocompleteAPI(query, (res, error) => {
        if (error) {
          return dispatch(getAutocompleteSuggestionsError(error));
        }
        const data = formatSuggestionData(res);
        return dispatch(getAutocompleteSuggestionsComplete(data));
      });
    }, 300);
  };
};

export const getAutocompleteSuggestionsComplete = data => {
  return { type: TYPES.GET_AUTOCOMPLETE_COMPLETE, data };
};
export const getAutocompleteSuggestionsLoading = () => {
  return { type: TYPES.GET_AUTOCOMPLETE_LOADING };
};

export const getAutocompleteSuggestionsError = error => {
  return { type: TYPES.GET_AUTOCOMPLETE_ERROR, error };
};

export const getAutocompleteNullSearch = () => ({ type: TYPES.GET_AUTOCOMPLETE_NULL_SEARCH });
