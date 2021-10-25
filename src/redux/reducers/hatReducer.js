import {
  GET_HATS_PENDING,
  GET_HATS_SUCCESS,
  GET_HATS_ERROR,
} from "../constants/hatTypes";
import REQUEST_STATUS from "../../helpers/constants";

const initialState = {
  data: [],
  status: "",
  error: "",
};
export const hatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HATS_PENDING:
      return { ...state, status: REQUEST_STATUS.PENDING };
    case GET_HATS_SUCCESS:
      return { ...state, status: REQUEST_STATUS.SUCCESS, data: action.payload };
    case GET_HATS_ERROR:
      return { ...state, status: REQUEST_STATUS.ERROR, error: action.payload };

    default:
      return state;
  }
};

