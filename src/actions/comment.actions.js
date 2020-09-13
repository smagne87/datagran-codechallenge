import {
  GET_COMMENT_FAIL,
  GET_COMMENT_PENDING,
  GET_COMMENT_SUCCESS,
} from '../constants/comment.constants';
import { commentServices } from '../services';

function getCommentsByPost(postId) {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_COMMENT_PENDING });
      const result = await commentServices.getCommentByPost(postId);
      dispatch({
        type: GET_COMMENT_SUCCESS,
        data: result,
      });
    } catch (e) {
      dispatch({ type: GET_COMMENT_FAIL, e, errorMsg: 'Something went wrong!' });
    }
  };
}


export const commentActions = {
  getCommentsByPost,
};
