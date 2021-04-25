import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import post from './post';
import user from './user';
import flashMessages from './flashMessages';

export default combineReducers({
  posts: posts,
  auth: auth,
  post: post,
  user: user,
  flashMessages: flashMessages
});