import {
  GET_HAT_DETAIL_PENDING,
  GET_HAT_DETAIL_SUCCESS,
  GET_HAT_DETAIL_ERROR,
} from "../constants/hatDetailTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: {},
  status: "",
  error: "",
};
export const hatDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HAT_DETAIL_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_HAT_DETAIL_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_HAT_DETAIL_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};

