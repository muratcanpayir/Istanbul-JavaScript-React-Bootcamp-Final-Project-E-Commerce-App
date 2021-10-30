import axios from "axios";
import {
  POST_AUTH_PENDING,
  POST_AUTH_SUCCESS,
  POST_AUTH_ERROR,
  POST_AUTH_INITIAL,
} from "../constants/authTypes";

export const postAuth = (email,password) => (dispatch) => {
  dispatch({ type: POST_AUTH_PENDING });
  const data={
    email:email,
    password:password
  }
  axios
    .post("https://616d4d1637f997001745d970.mockapi.io/api/v1/user",data)
    .then((response) => {
      dispatch({ type: POST_AUTH_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: POST_AUTH_ERROR, payload: error.response.data });
    });
};
export const resetAuth=()=>(dispatch)=>{
  dispatch({type:POST_AUTH_INITIAL});
}
