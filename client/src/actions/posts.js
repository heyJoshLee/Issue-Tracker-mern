import * as api from '../api';
import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST, UPDATE_POST} from '../types/index';


export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
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
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({
      type: CREATE_POST,
      payload: data.post
    });
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (postId, postParams) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(postId, postParams);
    dispatch({
      type: UPDATE_POST,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = (postId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    dispatch({
      type: DELETE_POST,
      payload: postId
    });
  } catch (error) {
    console.log(error)
  }
}