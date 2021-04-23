import { FETCH_POSTS, CREATE_POST, DELETE_POST } from '../types/index';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case DELETE_POST:
      return posts.filter(post => post._id !== action.payload);
    default:
      return posts;
  }
}