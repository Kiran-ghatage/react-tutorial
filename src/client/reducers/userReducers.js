const initialState = {
  users: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return {
        users: action.payload
      };

    default:
      return state;
  }
};
