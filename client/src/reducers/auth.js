import { LOG_IN, CREATE_USER, LOG_OUT } from '../types';

const defaultState = JSON.parse(localStorage.getItem('auth'));

export default (auth = defaultState, action ) => {
  switch (action.type) {
    case LOG_IN:
    case CREATE_USER:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return auth;
  }

}