import axios from "axios";
import config from "../Config/keys";

const WeatherAPI = axios.create({
  baseURL: config.WEATHER_API_BASE_URL
});

export const weatherByLocation = async (location, period) => {
  const res = await WeatherAPI(
    `/${period}?q=${location}&APPID=${config.WEATHER_API_KEY}`
  );
  console.log(res);
  return res.data;
};
