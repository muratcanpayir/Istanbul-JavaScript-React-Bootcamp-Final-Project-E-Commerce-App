import {
  DELETE_FROM_CART_PENDING,
  DELETE_FROM_CART_SUCCESS,
  DELETE_FROM_CART_ERROR,
} from "../constants/deleteFromCart";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: {},
  status: "",
  error: "",
};
export const deleteFromCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FROM_CART_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case DELETE_FROM_CART_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case DELETE_FROM_CART_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};

