import {
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
} from "../constants/loginTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: {},
  status: "",
  error: "",
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case POST_LOGIN_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case POST_LOGIN_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};

