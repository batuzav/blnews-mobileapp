import { combineReducers } from "redux";
import app from "./app";
import User from "./user";

const reducer = combineReducers({
  app,
  user: User,
});

export default reducer;
