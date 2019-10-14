import * as TYPES from "../../Constants/Types";
import { getWeatherAPI } from "../../services/weatherApi";
import { formatDailyWeatherData, formatHourlyWeatherData } from "../../utilities";

export const getWeatherByLocation = (city, period) => {
  return async dispatch => {
    dispatch(getWeatherByLocationLoading(period));

    await getWeatherAPI(city, period, (res, error) => {
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
