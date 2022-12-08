import { TOGGLE_SORT } from "../actiontypes/actiontypes";

export const checkByLast = () => {
  return {
    type: TOGGLE_SORT,
    payload: "CHECK_BY_LAST",
  };
};

export const checkByFirst = () => {
  return {
    type: TOGGLE_SORT,
    payload: "CHECK_BY_FIRST",
  };
};
