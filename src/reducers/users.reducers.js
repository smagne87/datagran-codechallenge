import {
  GET_USERS_FAIL,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
} from '../constants/user.constants';

const initialState = {
  loading: true,
  fail: false,
  errorMsg: '',
  users: [],
};

const users = (state = initialState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case GET_USERS_FAIL:
      return {
        ...state,
        fail: true,
        loading: false,
        errorMsg: action.errorMsg,
      };
    case GET_USERS_PENDING:
      return {
        ...state,
        fail: false,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        fail: false,
        loading: false,
        users: [
          ...action.data,
        ],
      };
    default:
      return state;
  }
};

export default users;
