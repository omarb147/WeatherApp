import * as TYPES from "../../Constants/Types";
const initalState = {
  loading: false,
  error: null
};

const imageReducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPES.GET_IMAGE_FOR_FORECAST_COMPLETE: {
      return { ...state, [action.key]: { ...action.data }, loading: false };
    }
    case TYPES.GET_IMAGE_FOR_FORECAST_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    case TYPES.GET_IMAGE_FOR_FORECAST_LOADING: {
      return { ...state, loading: true };
    }
  }
  return state;
};

export default imageReducer;
