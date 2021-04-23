import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("GETTING POSTS")
    dispatch({
      type: "FETCH_POSTS",
      payload: data
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const getPost = (postId) => async (dispatch) => {
  try {

    const { data } = await api.fetchPost(postId);
    console.log("GOT Post")
    console.log(data)

    dispatch({
      type: "FETCH_POST",
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
      type: "CREATE_POST",
      payload: data.post
    });
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (postId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    dispatch({
      type: "DELETE_POST",
      payload: postId
    });
  } catch (error) {
    console.log(error)
  }
}