import * as api from '../api';
import { CREATE_COMMENT, DELETE_COMMENT } from '../types/index';
import { errorFlashMessage, addFlashMessage } from './helpers.js'; 

export const getComments = (objectType, objectId) => async (dispatch) => {
  try {
    const { data } = await api.fetchComments(objectType, objectId);
    return data;   
  } catch (error) {
    console.log(error.message);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const createComment = (comment, objectType, objectId) => async (dispatch, getState) => {
  try {
    const { data } = await api.createComment(comment, objectType, objectId);
    dispatch({
      type: CREATE_COMMENT,
      payload: data
    });
    addFlashMessage("Comment successfully created.", dispatch);
    return data;
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const deleteComment = (commentId) => async (dispatch) => {
  try {
    await api.deleteComment(commentId);
    dispatch({
      type: DELETE_COMMENT,
      payload: commentId
    });
    addFlashMessage("Comment successfully deleted.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}