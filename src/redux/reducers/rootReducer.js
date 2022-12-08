import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import blogReducer from "./blogReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  filterReducer,
  blogReducer,
  themeReducer,
});

export default rootReducer;
