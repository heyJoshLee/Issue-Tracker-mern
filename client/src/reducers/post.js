export default (post = null, action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    default:
      return post;
  }
}