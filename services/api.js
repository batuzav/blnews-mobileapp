import Constants from "expo-constants";
const axios = require("axios");
const serverUrl = Constants.manifest.extra.serverUrl;

export const fakeRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
};

export const apiCall = (query, token = "") => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const url = `${serverUrl}/graphql`;
  console.log("url: ", url);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  };
  const data = JSON.stringify({ query });
  // if (token)
  // headers['Authorization'] = token;
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, { headers })
      .then((res1) => {
        console.log("RES: ", res1.data.data);
        // if (res.status !== 200) {
        // reject(res)
        // reject(new Error(`Status ${res.status}`))
        // } else {
        return res1;
        // }
      })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};
