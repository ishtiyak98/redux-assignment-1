import {
  ADD_CONTENT,
  ADD_HISTORY,
  DELETE_CONTENT,
  GET_BLOG,
  GET_CONTENT,
} from "../actiontypes/actiontypes";

const initialReducer = {
  blogs: [],
  blogPost: {},
  blogHistory: [],
};

const blogReducer = (state = initialReducer, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((item) => item._id !== action.payload),
      };
    case GET_BLOG:
      return {
        ...state,
        blogPost: { ...action.payload },
      };
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
