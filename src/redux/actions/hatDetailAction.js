import axios from "axios";
import {
  GET_HAT_DETAIL_PENDING,
  GET_HAT_DETAIL_SUCCESS,
  GET_HAT_DETAIL_ERROR,
} from "../constants/hatDetailTypes";

export const getHatDetail = (id) => (dispatch) => {
  dispatch({ type: GET_HAT_DETAIL_PENDING });
  axios
    .get("https://616d4d1637f997001745d970.mockapi.io/api/v1/hat/"+id)
    .then((response) => {
      dispatch({ type: GET_HAT_DETAIL_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_HAT_DETAIL_ERROR, payload: error.response.data });
    });
};
