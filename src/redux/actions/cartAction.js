import axios from "axios";
import {
  GET_CART_PENDING,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_INITIAL,
} from "../constants/cartTypes";

export const getCart = () => (dispatch) => {
  dispatch({ type: GET_CART_PENDING });
  axios
    .get("https://616d4d1637f997001745d970.mockapi.io/api/v1/cart")
    .then((response) => {
      dispatch({ type: GET_CART_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_CART_ERROR, payload: error.response.data });
    });
};

export const resetCart=()=>(dispatch)=>{
  dispatch({type:GET_CART_INITIAL});
}