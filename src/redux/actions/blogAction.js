import { ADD_HISTORY } from "../actiontypes/actiontypes";

export const addHistory = (data) => {
  return {
    type: ADD_HISTORY,
    payload: data,
  };
};
