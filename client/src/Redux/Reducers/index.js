import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import WeatherReducer from "./WeatherReducer";

export default combineReducers({ weatherAPI: WeatherReducer, search: SearchReducer });
