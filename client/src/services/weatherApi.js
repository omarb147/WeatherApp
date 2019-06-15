import axios from "axios";
import config from "../Config/keys";

const WeatherAPI = axios.create({
  baseURL: config.WEATHER_API_BASE_URL
});

export const dailyWeatherByLocation = async location => {
  const res = await WeatherAPI(
    `/daily?q=${location}&APPID=${config.WEATHER_API_KEY}`
  );
  console.log(res);
  return res.data;
};
