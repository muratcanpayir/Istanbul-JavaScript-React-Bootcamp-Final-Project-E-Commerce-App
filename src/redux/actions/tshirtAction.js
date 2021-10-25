import axios from "axios";
import {
  GET_TSHIRTS_PENDING,
  GET_TSHIRTS_SUCCESS,
  GET_TSHIRTS_ERROR,
} from "../constants/tshirtTypes";

export const getTshirts = () => (dispatch) => {
  dispatch({ type: GET_TSHIRTS_PENDING });
  axios
    .get("https://616d4d1637f997001745d970.mockapi.io/api/v1/tshirt")
    .then((response) => {
      dispatch({ type: GET_TSHIRTS_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_TSHIRTS_ERROR, payload: error });
    });
};
