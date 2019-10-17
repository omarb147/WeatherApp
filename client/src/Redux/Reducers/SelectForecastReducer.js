import * as TYPES from "../../Constants/Types";
const initalState = null;

const SelectForecastReducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPES.SELECT_FORECAST: {
      return { ...action.forecast };
    }
    case TYPES.GET_AUTOCOMPLETE_NULL_SEARCH: {
      return initalState;
    }
  }
  return state;
};

export default SelectForecastReducer;
