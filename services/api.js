import Constants from "expo-constants";
const axios = require("axios");
const serverUrl = Constants.manifest.extra.serverUrl;

export const apiCall = (query, token = "") => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: token,
  };
  const url = `${serverUrl}/graphql`;
  // console.log("url: ", url);
  const data = JSON.stringify({ query });
  return new Promise(async (resolve, reject) => {
    await axios
      .post(url, data, { headers })
      .then((res1) => {
        // console.log("RES: ", res1.data.data);
        return res1;
      })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};
