import * as api from '../api';
import { FETCH_STICKY_MESSAGES, FETCH_STICKY_MESSAGE, CREATE_STICKY_MESSAGE, DELETE_STICKY_MESSAGE, UPDATE_STICKY_MESSAGE} from '../types/index';
import { errorFlashMessage, addFlashMessage } from './helpers.js'; 


export const getStickyMessages = (objectType, objectId) => async (dispatch) => {
  try {
    const { data } = await api.fetchStickyMessages(objectType, objectId);
    console.log(data)

    dispatch({
      type: FETCH_STICKY_MESSAGES,
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

export const createStickyMessage = (stickyMessage, objectType, objectId) => async (dispatch, getState) => {
  try {
    
    const { data } = await api.createStickyMessage(stickyMessage, objectType, objectId);
    
    dispatch({
      type: CREATE_STICKY_MESSAGE,
      payload: data
    });
    addFlashMessage("stickyMessage successfully created.", dispatch)
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

// export const updateStickyMessage = (stickyMessageId, postParams) => async (dispatch, getState) => {
//   try {
  
//     const { data } = await api.updateStickyMessage(stickyMessageId, postParams, getState().auth.token);
//     dispatch({
//       type: UPDATE_STICKY_MESSAGE,
//       payload: data
//     });
//     // addFlashMessage("Post successfully updated.", dispatch)
//   } catch (error) {
//     console.log(error);
//     errorFlashMessage(error, dispatch, "danger");
//   }
// }

// export const deleteStickyMessage = (stickyMessageId) => async (dispatch, getState) => {
//   try {
//     await api.deleteStickyMessage(stickyMessageId, getState().auth.token);
//     dispatch({
//       type: DELETE_STICKY_MESSAGE,
//       payload: stickyMessageId
//     });
//     // addFlashMessage("Post successfully deleted.", dispatch)
//   } catch (error) {
//     console.log(error);
//     errorFlashMessage(error, dispatch, "danger");
//   }
// }