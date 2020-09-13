import {
  GET_POSTS_FAIL,
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
} from '../constants/post.constants';
import { postServices } from '../services';

function getPostsByUser(userId) {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_POSTS_PENDING });
      const result = await postServices.getPostsByUser(userId);
      dispatch({
        type: GET_POSTS_SUCCESS,
        data: result,
      });
    } catch (e) {
      dispatch({ type: GET_POSTS_FAIL, e, errorMsg: 'Something went wrong!' });
    }
  };
}


export const postActions = {
  getPostsByUser,
};
