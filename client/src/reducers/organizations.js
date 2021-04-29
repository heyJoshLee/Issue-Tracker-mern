import { FETCH_ORGANIZATIONS, CREATE_ORGANIZATION, DELETE_ORGANIZATION } from '../types/index';

export default (organizations = [], action) => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS:
      return action.payload;
    case CREATE_ORGANIZATION:
      return [...organizations, action.payload];
    case DELETE_ORGANIZATION:
      return organizations.filter(project => project._id !== action.payload);
    default:
      return organizations;
  }
}