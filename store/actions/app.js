import {
  loginQuery,
  checkAuthQuery,
  updateTokkenAppQuery,
} from "../../services/auth";
import { apiCall } from "../../services/api";

import { syncUserData } from "./user";

export const serverCall = () => ({
  type: "SERVER_CALL",
});
export const serverError = (payload) => ({
  type: "SERVER_ERROR",
  payload,
});
export const loginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: { token },
});
export const loginFailed = (payload) => ({
  type: "LOGIN_FAILED",
  payload,
});
export const logout = () => ({
  type: "LOGOUT",
});
export const loginReset = () => ({
  type: "LOGIN_RESET",
});
export const socketConnectedDispatcher = () => ({
  type: "SOCKET_CONNECTED",
});
export const socketDisconnectedDispatcher = () => ({
  type: "SOCKET_DISCONNECTED",
});

export const login = (data) => {
  return async (dispatch, store) => {
    dispatch(serverCall());
    try {
      console.log("data: ", apiCall(loginQuery(data)));
      const response = await apiCall(loginQuery(data));
      if (response.data.data) {
        // console.log("user info: ", response.data.login.data);
        dispatch(loginSuccess(response.data.data.login.token));
        dispatch(syncUserData(response.data.data.login.user));
      } else if (response.errors) {
        dispatch(loginFailed({ message: response.errors[0].message }));
      } else {
        dispatch(serverError({ message: "Error, intenta más tarde" }));
      }
    } catch (e) {
      console.log(e);
      dispatch(serverError({ message: "Error, intenta más tarde" }));
    }
  };
};

export const checkAuth = () => {
  return async (dispatch, store) => {
    try {
      const { token } = store().app;
      console.log("token en checkauth", store());
      const response = await apiCall(checkAuthQuery(), token);
      if (response.data.data) {
        console.log("response: ", response.data.data.checkLogin);
        if (response.data.data.checkLogin.isAuth === false)
          dispatch(loginReset());
      }
    } catch (e) {
      dispatch(serverError({ message: "Error, intenta más tarde" }));
    }
  };
};

export const updateTokken = (tokkenApp) => {
  return async (dispatch, store) => {
    try {
      const { token } = store().app;
      const { _id } = store().user;

      const response = await apiCall(
        updateTokkenAppQuery({ id: _id, tokkenApp: "KINGCRIMSON" })
      );
      console.log("repose: ", response.data.data.updateUserTokkenApp);
      if (response.data.data) {
        const userUpdate = response.data.data.updateUserTokkenApp;
        console.log("bay", userUpdate);
        dispatch(loginSuccess(token));
        console.log("letras");
        dispatch(syncUserData(response.data.data.login.updateUserTokkenApp));
        console.log("user: ", store().user);
      }
    } catch (e) {
      dispatch(serverError({ message: "Error, intenta más tarde" }));
    }
  };
};
