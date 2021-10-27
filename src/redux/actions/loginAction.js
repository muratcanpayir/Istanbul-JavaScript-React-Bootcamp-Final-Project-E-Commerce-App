import axios from "axios";
import { useSelector } from "react-redux";
import {
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  POST_LOGIN_INITIAL,
} from "../constants/loginTypes";

const accessToken="xx508xx63817x752xx74004x30705xx92x58349x5x78f5xx34xxxxx51";

// export const postLogin = (email,password) => (dispatch) => {
//   // const token=useSelector(state=>state.login);
//   // console.log(token.data);
//   dispatch({ type: POST_LOGIN_PENDING });
//   const data={
//     email:email,
//     password:password,
//   }
//   axios
//     .post("https://api.us.onelogin.com/auth/oauth2/v2/token",data)
//     .then((response) => {
//       // dispatch({ type: POST_LOGIN_SUCCESS, payload: response.data });
//       console.log(response.data)
//     })
//     .catch((error) => {
//       dispatch({ type: POST_LOGIN_ERROR, payload: error.response.data });
//     });
// };
export const resetAddToCart=()=>(dispatch)=>{
  dispatch({type:POST_LOGIN_INITIAL});
}
export const postLogin=(email,password)=>(dispatch)=>{
  dispatch({type:POST_LOGIN_SUCCESS,payload:accessToken});
}
