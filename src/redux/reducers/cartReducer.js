import {
  ADD_TO_CART,
  DELETE_FROM_CART
} from "../constants/cartTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: [],
  status: "",
  error: "",
};
export const hatDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case DELETE_FROM_CART:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };

    default:
      return state;
  }
};

