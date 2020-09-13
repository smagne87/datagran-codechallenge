import {
  GET_POSTS_FAIL,
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
} from '../constants/post.constants';

const initialState = {
  loading: true,
  fail: false,
  errorMsg: '',
  posts: [],
};

const posts = (state = initialState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case GET_POSTS_FAIL:
      return {
        ...state,
        fail: true,
        loading: false,
        errorMsg: action.errorMsg,
      };
    case GET_POSTS_PENDING:
      return {
        ...state,
        fail: false,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        fail: false,
        loading: false,
        posts: [...action.data],
      };
    default:
      return state;
  }
};

export default posts;
