import axios from "axios";
import {
  DELETE_FROM_CART_PENDING,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_ERROR,
  DELETE_FROM_CART_INITIAL,
} from "../constants/deleteFromCart";

export const deleteFromCart = (id) => (dispatch) => {
  dispatch({ type: DELETE_FROM_CART_PENDING });
  axios
    .delete("https://616d4d1637f997001745d970.mockapi.io/api/v1/cart/"+id)
    .then((response) => {
      dispatch({ type: DELETE_FROM_CART_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: DELETE_FROM_CART_ERROR, payload: error.response.data });
    });
};
export const resetDeleteOffer=(data)=>(dispatch)=>{
  dispatch({type:DELETE_FROM_CART_INITIAL});
}
