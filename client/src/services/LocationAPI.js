import axios from "axios";
import * as CONFIG from "../Config";

export const autocompleteAPI = async query => {
  //1.Parse query for link
  //2.Set up API call
  //3. Handle errors
  const escapedQuery = query.split(" ").join("+");

  try {
    const res = await axios.get(`${CONFIG.DEVELOPER_HERE_BASE_URL}?query=${escapedQuery}`, {
      params: {
        app_id: CONFIG.DEVELOPER_HERE_APP_ID,
        app_code: CONFIG.DEVELOPER_HERE_APP_CODE,
        resultType: "areas"
      }
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
