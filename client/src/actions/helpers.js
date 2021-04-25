import { ADD_FLASH_MESSAGE } from '../types/index';


export const errorFlashMessage = (error, dispatch, type = "success") => {
  const message = {
    message: error.response.data.message, 
    type:  type
  }
    dispatch({
      type: ADD_FLASH_MESSAGE,
      payload: message
    });
}

export const addFlashMessage = (message, dispatch, type = 'success') => {
  const messageData = {
    message: message, 
    type:  type
  }
    dispatch({
      type: ADD_FLASH_MESSAGE,
      payload: messageData
    });
}
