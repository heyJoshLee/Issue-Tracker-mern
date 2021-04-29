// @ts-ignore
import { FETCH_PROJECT, UPDATE_PROJECT } from '../types/index';

export default (project = null, action) => {
  switch (action.type) {
    case FETCH_PROJECT:
    case UPDATE_PROJECT:
      return action.payload;
    default:
      return project;
  }
}