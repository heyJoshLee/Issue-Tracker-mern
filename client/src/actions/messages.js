import { CLEAR_MESSAGES } from "../types"

export const clearMessages = () => dispatch => {
  console.log("ACTION")
  dispatch({
    type: CLEAR_MESSAGES
  });
}