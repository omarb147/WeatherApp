import axios from "axios";
import * as CONFIG from "../Config";
import { convertISOCode } from "../utilities/convertIsoCode";

// export const getWeatherAPI = async (location, period, callback) => {
//   let query;
//   let res;
//   //NEEDS TO  BE REFACTORED
//   try {
//     const { district, country_code, city } = location;
//     const country_iso = convertISOCode(country_code);
//     query = `${district},${country_iso}`;
//     console.log(district);
//     res = await axios.get(`${CONFIG.WEATHER_API_BASE_URL}/${period}`, { params: { APPID: CONFIG.WEATHER_API_KEY, q: query } });
//     if (res) return callback(res.data, null);
//   } catch (error) {
//     if (error.message == "Request failed with status code 404") {
//       try {
//         const { country_code, city } = location;
//         const country_iso = convertISOCode(country_code);
//         query = `${city},${country_iso}`;
//         res = await axios.get(`${CONFIG.WEATHER_API_BASE_URL}/${period}`, { params: { APPID: CONFIG.WEATHER_API_KEY, q: query } });
//         if (res) return callback(res.data, null);
//       } catch (err) {
//         return callback(null, error);
//       }
//     }
//     return callback(null, error);
//   }
// };

export const getWeatherAPI = async (location, period, callback) => {
  //NEEDS TO  BE REFACTORED
  try {
    const { lat, lon } = location;
    const res = await axios.get(`${CONFIG.WEATHER_API_BASE_URL}/${period}`, {
      params: { APPID: CONFIG.WEATHER_API_KEY, lat, lon }
    });
    if (res) return callback(res.data, null);
  } catch (error) {
    return callback(null, error);
  }
};
