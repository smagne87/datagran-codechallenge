import { combineReducers } from 'redux';
import users from './users.reducers';
import posts from './posts.reducers';
import comments from './comments.reducers';

export default combineReducers({
  posts,
  users,
  comments,
});
