import {
  ADD_CONTENT,
  ADD_HISTORY,
  GET_CONTENT,
} from "../actiontypes/actiontypes";

export const addHistory = (data) => {
  return {
    type: ADD_HISTORY,
    payload: data,
  };
};

export const loadBlogs = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const addBlogState = (data) => {
  return {
    type: ADD_CONTENT,
    payload: data,
  };
};
