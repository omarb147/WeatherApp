import * as TYPES from "../../Constants/Types";

const initalState = {
  city: null,
  country: null,
  daily: {
    Loading: false,
    data: [],
    error: null
  },
  hourly: {
    Loading: false,
    data: [],
    error: null
  }
};

const weatherAPIReducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPES.GET_WEATHER_BY_LOCATION_COMPLETE:
      switch (action.period) {
        case TYPES.DAILY:
          return {
            ...state,
            city: action.data.city,
            country: action.data.country,
            daily: { loading: false, data: [...action.data.forecast], error: null }
          };
        case TYPES.HOURLY:
          return { ...state, hourly: { loading: false, data: [...action.data.forecast], error: null } };
      }
    case TYPES.GET_WEATHER_BY_LOCATION_ERROR:
      switch (action.period) {
        case TYPES.DAILY:
          return { ...state, daily: { loading: false, data: [], error: action.error } };
        case TYPES.HOURLY:
          return { ...state, hourly: { loading: false, data: [], error: action.error } };
      }
    case TYPES.GET_WEATHER_BY_LOCATION_LOADING:
      switch (action.period) {
        case TYPES.DAILY:
          return { ...state, daily: { loading: true, data: [], error: false } };
        case TYPES.HOURLY:
          return { ...state, hourly: { loading: true, data: [], error: false } };
      }
    case TYPES.GET_AUTOCOMPLETE_NULL_SEARCH: {
      return initalState;
    }
  }
  return state;
};

export default weatherAPIReducer;
