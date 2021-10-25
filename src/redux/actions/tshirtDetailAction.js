import axios from "axios";
import {
  GET_TSHIRT_DETAIL_PENDING,
  GET_TSHIRT_DETAIL_SUCCESS,
  GET_TSHIRT_DETAIL_ERROR,
} from "../constants/tshirtDetailTypes";

export const getTshirtDetail = (id) => (dispatch) => {
  dispatch({ type: GET_TSHIRT_DETAIL_PENDING });
  axios
    .get("https://616d4d1637f997001745d970.mockapi.io/api/v1/tshirt/"+id)
    .then((response) => {
      dispatch({ type: GET_TSHIRT_DETAIL_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_TSHIRT_DETAIL_ERROR, payload: error });
    });
};
