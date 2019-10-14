import axios from "axios";
import * as CONFIG from "../Config";

export const getWeatherAPI = async (location, period, callback) => {
  try {
    const { district, country_code } = location;
    const query = `${district},${country_code}`;
    const res = await axios.get(`${CONFIG.WEATHER_API_BASE_URL}/${period}`, { params: { APPID: CONFIG.WEATHER_API_KEY, q: query } });
    if (res) return callback(res.data, null);
  } catch (error) {
    return callback(null, error);
  }
};
