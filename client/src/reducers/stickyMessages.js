import { FETCH_STICKY_MESSAGES, CREATE_STICKY_MESSAGE, DELETE_STICKY_MESSAGE } from '../types/index';

export default (stickyMessages = null, action) => {
  switch (action.type) {
    case FETCH_STICKY_MESSAGES:
      return action.payload;
    case CREATE_STICKY_MESSAGE:
      return [...stickyMessages, action.payload];
    case DELETE_STICKY_MESSAGE:
      return stickyMessages.filter(project => project._id !== action.payload);
    default:
      return stickyMessages;
  }
}