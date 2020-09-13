import {
  GET_COMMENT_FAIL,
  GET_COMMENT_PENDING,
  GET_COMMENT_SUCCESS,
} from '../constants/comment.constants';

const initialState = {
  loading: true,
  fail: false,
  errorMsg: '',
  comments: [],
};

const comments = (state = initialState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case GET_COMMENT_FAIL:
      return {
        ...state,
        fail: true,
        loading: false,
        errorMsg: action.errorMsg,
      };
    case GET_COMMENT_PENDING:
      return {
        ...state,
        fail: false,
        loading: true,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        fail: false,
        loading: false,
        comments: [...action.data],
      };
    default:
      return state;
  }
};

export default comments;
