import * as api from '../api';
import { FETCH_ISSUES, CREATE_ISSUE, DELETE_ISSUE, UPDATE_ISSUE } from '../types/index';
import { errorFlashMessage, addFlashMessage } from './helpers.js'; 


export const getIssues = (orgId, projectId) => async (dispatch) => {
  try {
    const { data } = await api.fetchIssues(orgId, projectId);
    console.log(data)
    dispatch({
      type: FETCH_ISSUES,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
    errorFlashMessage(error, dispatch, "danger");
  }
}

// export const getStickyMessage = (orgId, stickyMessageId) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchStickyMessage(orgId, stickyMessageId);
//     console.log("ACTION")
//     console.log(data);
//     dispatch({
//       type: FETCH_STICKY_MESSAGE,
//       payload: data
//     })
//   } catch (error) {
//     console.log(error)
//     errorFlashMessage(error, dispatch, "danger");
//   }
// }

export const createIssue = (orgId, projectId, newIssue) => async (dispatch, getState) => {
  try {
    const { data } = await api.createIssue(orgId, projectId, newIssue);
    dispatch({
      type: CREATE_ISSUE,
      payload: data
    });
    addFlashMessage("Issue successfully created.", dispatch)
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const updateIssue = (orgId, projectId, issueId, issueParams) => async (dispatch, getState) => {
  try {
    const { data } = await api.updateIssue(orgId, projectId, issueId, issueParams);
    dispatch({
      type: UPDATE_ISSUE,
      payload: data
    });
    // addFlashMessage("Post successfully updated.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const deleteIssue = (orgId, projectId, issueId) => async (dispatch, getState) => {
  try {
    await api.deleteIssue(orgId, projectId, issueId);
    dispatch({
      type: DELETE_ISSUE,
      payload: issueId
    });
    addFlashMessage("Issue successfully deleted.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}