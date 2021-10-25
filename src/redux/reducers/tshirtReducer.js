import {
  GET_TSHIRTS_PENDING,
  GET_TSHIRTS_SUCCESS,
  GET_TSHIRTS_ERROR,
} from "../constants/tshirtTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: [],
  status: "",
  error: "",
};
export const tshirtReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TSHIRTS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_TSHIRTS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_TSHIRTS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};

