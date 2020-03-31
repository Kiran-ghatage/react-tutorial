import axios from "axios";

export const fetchUsers = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
