import {
  POST_LOGIN_SUCCESS,
  POST_LOGIN_INITIAL,
} from "../constants/loginTypes";

const accessToken = "xx508xx63817x752xx74004x30705xx92x58349x5x78f5xx34xxxxx51";

export const resetAddToCart = () => (dispatch) => {
  dispatch({ type: POST_LOGIN_INITIAL });
};
export const postLogin = (email, password) => (dispatch) => {
  dispatch({ type: POST_LOGIN_SUCCESS, payload: accessToken });
};
