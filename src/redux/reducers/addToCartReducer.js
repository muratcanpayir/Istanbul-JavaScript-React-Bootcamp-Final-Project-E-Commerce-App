import {
  POST_ADD_TO_CART_PENDING,
  POST_ADD_TO_CART_SUCCESS,
  POST_ADD_TO_CART_ERROR,
  POST_ADD_TO_CART_INITIAL,
} from "../constants/addToCartTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: {},
  status: "",
  error: "",
};
export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD_TO_CART_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case POST_ADD_TO_CART_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_ADD_TO_CART_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_ADD_TO_CART_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};
