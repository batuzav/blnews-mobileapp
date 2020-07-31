import { combineReducers } from "redux";
import app from "./app";
import user from "./user";
import campaigns from "./campaigns";
import campaign from "./campaing";

const reducer = combineReducers({
  app,
  user,
  campaigns,
  campaign,
});

export default reducer;
