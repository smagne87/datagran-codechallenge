import {
  GET_USERS_FAIL,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
} from '../constants/user.constants';
import { userServices } from '../services';

function getUsers() {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USERS_PENDING });
      const result = await userServices.getUsers();
      dispatch({
        type: GET_USERS_SUCCESS,
        data: result,
      });
    } catch (e) {
      dispatch({ type: GET_USERS_FAIL, e, errorMsg: 'Something went wrong!' });
    }
  };
}


export const userActions = {
  getUsers,
};
