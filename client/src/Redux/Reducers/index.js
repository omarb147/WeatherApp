import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import WeatherReducer from "./WeatherReducer";
import imageReducer from "./ImageReducer";
import SelectForecastReducer from "./selectForecastReducer";

export default combineReducers({
  weatherAPI: WeatherReducer,
  search: SearchReducer,
  images: imageReducer,
  selectedForecast: SelectForecastReducer
});
