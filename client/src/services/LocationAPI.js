import axios from "axios";
import * as CONFIG from "../Config";

export const autocompleteAPI = async (query, callback) => {
  const escapedQuery = query.split(" ").join("+");

  try {
    const res = await axios.get(`${CONFIG.DEVELOPER_HERE_BASE_URL}?query=${escapedQuery}`, {
      params: {
        app_id: CONFIG.DEVELOPER_HERE_APP_ID,
        app_code: CONFIG.DEVELOPER_HERE_APP_CODE,
        resultType: "areas",
        maxresults: 10
      }
    });
    return callback(res.data.suggestions, null);
  } catch (error) {
    return callback(null, error);
  }
};
