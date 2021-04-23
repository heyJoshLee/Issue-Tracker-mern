export default (user = null, action ) => {
  switch (action.type) {
    case "FETCH_USER":
    case "UPDATE_USER":
      return action.payload;
    case "LOG_OUT":
      return null;
    default:
      return user;
  }
}