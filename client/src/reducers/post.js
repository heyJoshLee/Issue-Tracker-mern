// @ts-ignore
import { FETCH_POST, UPDATE_POST } from '../types/index';

export default (post = null, action) => {
  switch (action.type) {
    case FETCH_POST:
    case UPDATE_POST:
      return action.payload;
    default:
      return post;
  }
}