import { LOG_IN, LOG_OUT,CLEAR_MESSAGES, ADD_FLASH_MESSAGE } from '../types/index';

export default (flashMessages = [], action ) => {
  switch (action.type) {
    case LOG_IN:
      return [...flashMessages, {type: 'success', message: "You are now logged in."}]
    case LOG_OUT:
      return [...flashMessages, {type: 'success', message: "You are now logged out."}]
    case ADD_FLASH_MESSAGE:
      return [...flashMessages, action.payload]
    case CLEAR_MESSAGES:
      return [];
    default:
      return flashMessages;
  }

}