import axios from "axios";
import * as CONFIG from "../Config";

const WeatherAPI = axios.create({
  baseURL: CONFIG.WEATHER_API_BASE_URL
});

export const getWeatherAPI = async (location, period, callback) => {
  try {
    const res = await WeatherAPI(`/${period}?q=${location}&APPID=${CONFIG.WEATHER_API_KEY}`);
    if (res) return callback(res.data, null);
  } catch (error) {
    return callback(null, error);
  }
};
