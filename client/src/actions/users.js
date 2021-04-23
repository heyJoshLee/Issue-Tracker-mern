import * as api from '../api';


export const getUser = (userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchLoggedInUser(userId);
    dispatch({
      type: "FETCH_USER",
      payload: data
    })

  } catch (error) {
    console.log(error);
  }
}

export const createUser = (userParams) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userParams);
    dispatch({
      type: "CREATE_USER",
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const updateUser = (userId, userParams) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(userId, userParams);
    console.log(data)
    dispatch({
      type: "UPDATE_USER",
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}
