/* eslint-disable import/prefer-default-export */
import axios from "axios";

const { VUE_APP_API_KEY, VUE_APP_AXIOS_BASE_URL } = process.env;

export const getTrendingMovies = async () => {
  const TIME = "week";
  const MEDIA_TYPE = "movie";

  const results = await axios.get(
    `${VUE_APP_AXIOS_BASE_URL}/trending/${MEDIA_TYPE}/${TIME}?api_key=${VUE_APP_API_KEY}`
  );

  if (results) return results;
  return null;
};
