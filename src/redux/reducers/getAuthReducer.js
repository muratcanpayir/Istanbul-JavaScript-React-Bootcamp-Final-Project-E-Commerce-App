import {
  GET_AUTH_PENDING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
  GET_AUTH_INITIAL,
} from "../constants/getAuth";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: [],
  status: "",
  error: "",
};
export const getAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_INITIAL:
      return { state, status: REQUEST_STATUS.PENDING };
    case GET_AUTH_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_AUTH_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_AUTH_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};
