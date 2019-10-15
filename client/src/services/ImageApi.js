import axios from "axios";
import * as CONFIG from "../Config";

export const imageSearchAPI = async (query, callback) => {
  try {
    const res = await axios.get(CONFIG.UNSPLASH_SEARCH_BASE_URL, { params: { client_id: CONFIG.UNSPLASH_ACCESS_KEY, query: query } });
    return callback(res.data.results, null);
  } catch (error) {
    return callback(null, error);
  }
};
