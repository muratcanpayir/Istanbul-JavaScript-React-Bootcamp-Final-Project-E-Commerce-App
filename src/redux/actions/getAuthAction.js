import axios from "axios";
import {
  GET_AUTH_PENDING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
  GET_AUTH_INITIAL,
} from "../constants/getAuth";

export const getAuth = () => (dispatch) => {
  dispatch({ type: GET_AUTH_PENDING });
  axios
    .get("https://616d4d1637f997001745d970.mockapi.io/api/v1/user")
    .then((response) => {
      dispatch({ type: GET_AUTH_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_AUTH_ERROR, payload: error.response.data });
    });
};

export const resetGetAuth=()=>(dispatch)=>{
  dispatch({type:GET_AUTH_INITIAL});
}