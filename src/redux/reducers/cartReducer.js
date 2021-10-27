import {
  GET_CART_PENDING,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_INITIAL,
} from "../constants/cartTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: [],
  status: "",
  error: "",
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case GET_CART_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_CART_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_CART_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};
