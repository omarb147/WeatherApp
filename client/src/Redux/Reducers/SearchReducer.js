import * as TYPES from "../../Constants/Types";

const initalState = {
  suggestions: {
    data: [],
    loading: false,
    error: null
  },
  selectedLocation: null
};

const searchReducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPES.GET_AUTOCOMPLETE_COMPLETE: {
      return { ...state, suggestions: { ...state.suggestions, data: action.data, loading: false } };
    }
    case TYPES.GET_AUTOCOMPLETE_LOADING: {
      return { ...state, suggestions: { ...state.suggestions, loading: true } };
    }
    case TYPES.GET_AUTOCOMPLETE_LOADING: {
      return { ...state, suggestions: { ...state.suggestions, loading: false, error: action.error } };
    }
    case TYPES.GET_AUTOCOMPLETE_NULL_SEARCH: {
      return { ...state, suggestions: initalState.suggestions };
    }
    case TYPES.SELECT_LOCATION: {
      return { ...state, selectedLocation: action.location };
    }
  }
  return state;
};

export default searchReducer;
