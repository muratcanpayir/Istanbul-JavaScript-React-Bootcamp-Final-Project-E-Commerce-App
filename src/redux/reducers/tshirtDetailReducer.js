import {
  GET_TSHIRT_DETAIL_PENDING,
  GET_TSHIRT_DETAIL_SUCCESS,
  GET_TSHIRT_DETAIL_ERROR,
} from "../constants/tshirtDetailTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: {},
  status: "",
  error: "",
};
export const tshirtDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TSHIRT_DETAIL_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_TSHIRT_DETAIL_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_TSHIRT_DETAIL_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};

