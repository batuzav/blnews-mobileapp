import {
  showNotification,
  hideNotification,
} from "../store/actions/notification";
import {
  socketConnectedDispatcher,
  socketDisconnectedDispatcher,
} from "../store/actions/app";

import Constants from "expo-constants";
const io = require("socket.io-client");

console.log(">> SOCKET URL", serverUrl);
let socket = null;
const serverUrl = Constants.manifest.extra.socketUrl;

export const socketInit = ({ token, dispatch }) => {
  console.log("> socket.io init");

  socket = io(`${serverUrl}`, {
    jsonp: false,
    transports: ["websocket"],
    query: `token=${token}`,
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionDelayMax: 2500,
    reconnectionAttempts: Infinity,
    autoConnect: true,
  });

  socket.on("connection", () => {
    console.log("> SOCKET CONNECTION <<");
  });

  socket.on("connect", () => {
    console.log("> SOCKET: CONNECT");
    dispatch(socketConnectedDispatcher());
  });

  socket.on("disconnect", () => {
    console.log("> SOCKET: DISCONNECT");
    dispatch(socketDisconnectedDispatcher());
  });

  socket.on("connect_timeout", () => {
    console.log("> socket: connect_timeout");
  });

  socket.on("serverNotification", (payload) => {
    dispatch(
      showNotification({
        type: payload.type || "info",
        desc: payload.message || "",
      })
    );
  });

  socket.on("error", () => {
    console.log("> socket: error");
  });
};
