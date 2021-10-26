import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { tshirtReducer } from "../reducers/tshirtReducer";
import { hatReducer } from "../reducers/hatReducer";
import { tshirtDetailReducer } from "../reducers/tshirtDetailReducer";
import { hatDetailReducer } from "../reducers/hatDetailReducer";
import { cartReducer } from "../reducers/cartReducer";
import { addToCartReducer } from "../reducers/addToCartReducer";
import { deleteFromCartReducer } from "../reducers/deleteFromCartReducer";

const reducers = combineReducers({
  tshirts: tshirtReducer,
  hats: hatReducer,
  tshirtDetail: tshirtDetailReducer,
  hatDetail: hatDetailReducer,
  cart: cartReducer,
  addToCart: addToCartReducer,
  deleteFromCart: deleteFromCartReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
