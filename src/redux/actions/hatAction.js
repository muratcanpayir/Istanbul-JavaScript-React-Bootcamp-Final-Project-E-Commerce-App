import axios from "axios";
import {
  GET_HATS_PENDING,
  GET_HATS_SUCCESS,
  GET_HATS_ERROR,
} from "../constants/hatTypes";

export const getHats = () => (dispatch) => {
  dispatch({ type: GET_HATS_PENDING });
  axios
    .get("https://616d4d1637f997001745d970.mockapi.io/api/v1/hat")
    .then((response) => {
      dispatch({ type: GET_HATS_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_HATS_ERROR, payload: error });
    });
};
