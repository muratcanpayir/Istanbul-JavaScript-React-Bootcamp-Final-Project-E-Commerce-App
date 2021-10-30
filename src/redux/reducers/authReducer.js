import {
  POST_AUTH_PENDING,
  POST_AUTH_SUCCESS,
  POST_AUTH_ERROR,
  POST_AUTH_INITIAL,
} from "../constants/authTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: {},
  status: "",
  error: "",
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_AUTH_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case POST_AUTH_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_AUTH_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_AUTH_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};
