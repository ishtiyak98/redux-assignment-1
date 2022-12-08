import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  filterReducer,
  blogReducer,
});

export default rootReducer;
