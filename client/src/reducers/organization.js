// @ts-ignore
import { FETCH_ORGANIZATION, UPDATE_ORGANIZATION } from '../types/index';

export default (org = null, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATION:
    case UPDATE_ORGANIZATION:
      return action.payload;
    default:
      return org;
  }
}