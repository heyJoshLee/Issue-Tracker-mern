import * as api from '../api';
import { errorFlashMessage } from './helpers';
import { FETCH_USER, CREATE_USER, UPDATE_USER } from '../types/index';

export const getUser = (userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchLoggedInUser(userId);
    dispatch({
      type: FETCH_USER,
      payload: data
    })
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const createUser = (userParams) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userParams);
    localStorage.setItem('auth', JSON.stringify(data))
    dispatch({
      type: CREATE_USER,
      payload: data
    })
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const updateUser = (userId, userParams) => async (dispatch, getState) => {
  try {
    const { data } = await api.updateUser(userId, userParams, getState().auth.token);
    console.log(data)
    dispatch({
      type: UPDATE_USER,
      payload: data
    })
  } catch (error) {
    console.log(error.message);
  }
}
