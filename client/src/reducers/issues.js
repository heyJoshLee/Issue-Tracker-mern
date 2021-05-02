import { FETCH_ISSUES, CREATE_ISSUE, DELETE_ISSUE, UPDATE_ISSUE } from '../types/index';

export default (issues = null, action) => {
  switch (action.type) {
    case FETCH_ISSUES:
      return action.payload;
    case CREATE_ISSUE:
      return [ ...issues, action.payload];
    case DELETE_ISSUE:
      return issues.filter(project => project._id !== action.payload);
    case UPDATE_ISSUE:
      let updatedIssues = issues.map(issue => {
        if (issue._id === action.payload._id) {
          return action.payload;
        } else {
          return issue;
        }
      })
      return updatedIssues;
    default:
      return issues;
  }
}