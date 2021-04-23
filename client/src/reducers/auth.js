
const defaultState = JSON.parse(localStorage.getItem('auth'));


export default (auth = defaultState, action ) => {
  switch (action.type) {
    case "LOG_IN":
    case "CREATE_USER":
      console.log("REDUCER")
      return action.payload;
    case "LOG_OUT":
      console.log("REDUCER")
      return null;
    default:
      return auth;
  }

}