import themeMode from "./themeMode";
import lang from "./lang";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  themeMode,
  lang,
});

export default allReducers;
