import axios from "axios";
import {
  POST_ADD_TO_CART_PENDING,
  POST_ADD_TO_CART_SUCCESS,
  POST_ADD_TO_CART_ERROR,
} from "../constants/addToCartTypes";

export const postAddToCart = (data) => (dispatch) => {
  dispatch({ type: POST_ADD_TO_CART_PENDING });
  axios
    .post("https://616d4d1637f997001745d970.mockapi.io/api/v1/cart",data)
    .then((response) => {
      dispatch({ type: POST_ADD_TO_CART_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: POST_ADD_TO_CART_ERROR, payload: error.response.data });
    });
};
