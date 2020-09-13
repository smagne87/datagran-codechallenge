import comments from '../../reducers/comments.reducers';
import { GET_COMMENT_FAIL, GET_COMMENT_PENDING, GET_COMMENT_SUCCESS } from '../../constants/comment.constants';

describe('Reducers comments', () => {
  it('Should set loading to true', () => {
    const action = { type: GET_COMMENT_PENDING };
    const obj = comments(undefined, action);
    expect(obj.loading).toBe(true);
  });
  it('Should set fail to true with error message', () => {
    const errorMsg = 'Error message';
    const action = { type: GET_COMMENT_FAIL, errorMsg };
    const obj = comments(undefined, action);
    expect(obj.fail).toBe(true);
    expect(obj.errorMsg).toBe(errorMsg);
  });
  it('Should set dummy comments', () => {
    const action = {
      type: GET_COMMENT_SUCCESS,
      data: [{
        postId: 1, id: 1, title: 'test', body: 'test',
      }],
    };
    const obj = comments(undefined, action);
    expect(obj.fail).toBe(false);
    expect(obj.loading).toBe(false);
    expect(obj.comments.length).toBe(1);
  });
});
