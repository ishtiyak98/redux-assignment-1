import { TOGGLE_SORT } from "../actiontypes/actiontypes";

const initialState = {
  lastUpload: false,
  firstUpload: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SORT:
      if (action.payload === "CHECK_BY_LAST") {
        return {
          ...state,
          lastUpload: !state.lastUpload,
          firstUpload: false,
        };
      } else {
        return {
          ...state,
          lastUpload: false,
          firstUpload: !state.firstUpload,
        };
      }
    default:
      return state;
  }
};

export default filterReducer;
