import axios from "axios";

export const fetchUsers = (successCallBack, errorCallBack) => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      // successCallBack(response.data)
      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: response.data
      });
    })
    .catch(err => {
      // errorCallBack(err)
      console.log(err);
    });
};
