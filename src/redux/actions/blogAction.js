import { ADD_HISTORY, LOAD_BLOGS } from "../actiontypes/actiontypes";

export const addHistory = (data) => {
  return {
    type: ADD_HISTORY,
    payload: data,
  };
};

export const loadBlogs = (data) => {
  return {
    type: LOAD_BLOGS,
    payload: data,
  };
};
