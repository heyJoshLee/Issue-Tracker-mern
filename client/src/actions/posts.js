import * as api from '../api';
import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST, UPDATE_POST} from '../types/index';
import { errorFlashMessage, addFlashMessage } from './helpers.js'; 


export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const getPost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(postId);
    dispatch({
      type: FETCH_POST,
      payload: data
    })
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const createPost = (post) => async (dispatch, getState) => {
  try {
    const { data } = await api.createPost(post, getState().auth.token);
    console.log(data)

    dispatch({
      type: CREATE_POST,
      payload: data
    });
    addFlashMessage("Post successfully created.", dispatch)
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const updatePost = (postId, postParams) => async (dispatch, getState) => {
  try {
  
    const { data } = await api.updatePost(postId, postParams, getState().auth.token);
    dispatch({
      type: UPDATE_POST,
      payload: data
    });
    // addFlashMessage("Post successfully updated.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const deletePost = (postId) => async (dispatch, getState) => {
  try {
    await api.deletePost(postId, getState().auth.token);
    dispatch({
      type: DELETE_POST,
      payload: postId
    });
    // addFlashMessage("Post successfully deleted.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}