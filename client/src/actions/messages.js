import { CLEAR_MESSAGES } from "../types"

export const clearMessages = () => dispatch => {
  dispatch({
    type: CLEAR_MESSAGES
  });
}