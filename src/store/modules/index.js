import { combineReducers } from "redux";
import calendar from "./calendar";
import login from "./login";
import statics from "./statics";
import mypage from "./mypage";
export default combineReducers({
  calendar,
  login,
  statics,
  mypage
});
