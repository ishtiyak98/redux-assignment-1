import { ADD_HISTORY } from "../actiontypes/actiontypes";

const initialReducer = {
  blogs: [],
  blogHistory: [],
};

const blogReducer = (state = initialReducer, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      const doubleCheck = state.blogHistory.find(
        (item) => item._id === action.payload._id
      );
      if (doubleCheck) {
        return {    
          ...state,
          blogHistory: [
            ...state.blogHistory.filter(
              (item) => item._id !== action.payload._id
            ),
            { ...action.payload, readTime: doubleCheck.readTime + 1 },
          ],
        };
      } else {
        return {
          ...state,
          blogHistory: [
            ...state.blogHistory,
            { ...action.payload, readTime: 1 },
          ],
        };
      }

    default:
      return state;
  }
};

export default blogReducer;
