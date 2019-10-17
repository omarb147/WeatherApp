import axios from "axios";
import * as CONFIG from "../Config";

// export const autocompleteAPI = async (query, callback) => {
//   const escapedQuery = query.split(" ").join("+");

//   try {
//     const res = await axios.get(`${CONFIG.DEVELOPER_HERE_BASE_URL}?query=${escapedQuery}`, {
//       params: {
//         app_id: CONFIG.DEVELOPER_HERE_APP_ID,
//         app_code: CONFIG.DEVELOPER_HERE_APP_CODE,
//         resultType: "areas",
//         maxresults: 10
//       }
//     });
//     return callback(res.data.suggestions, null);
//   } catch (error) {
//     return callback(null, error);
//   }
// };

export const autocompleteAPI = async (query, callback) => {
  try {
    const res = await axios.get(`${CONFIG.AGOLIA_SEARCH_BASE_URL}?`, {
      params: { query, type: "city", hitsPerPage: 10 },
      headers: { ["X-Algolia-Application-Id"]: CONFIG.AGOLIA_SEARCH_APP_ID, "X-Algolia-API-Key": CONFIG.AGOLIA_SEARCH_API_KEY }
    });
    const data = res.data.hits;
    callback(data, null);
  } catch (error) {
    callback(null, error);
  }
};
