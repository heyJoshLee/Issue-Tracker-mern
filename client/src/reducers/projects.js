import { FETCH_PROJECTS, CREATE_PROJECT, DELETE_PROJECT } from '../types/index';

export default (projects = [], action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    case CREATE_PROJECT:
      return [...projects, action.payload];
    case DELETE_PROJECT:
      return projects.filter(project => project._id !== action.payload);
    default:
      return projects;
  }
}