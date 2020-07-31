import Constants from "expo-constants";
const axios = require("axios");
const serverUrl = Constants.manifest.extra.serverUrl;

export const apiCall = (query, token = "") => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const url = `${serverUrl}/graphql`;
  // console.log("url: ", url);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  };
  const data = JSON.stringify({ query });
  // if (token)
  // headers['Authorization'] = token;
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
