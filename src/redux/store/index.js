import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tshirtReducer } from "../reducers/tshirtReducer";
import { hatReducer } from "../reducers/hatReducer";
import { tshirtDetailReducer } from "../reducers/tshirtDetailReducer";
import { hatDetailReducer } from "../reducers/hatDetailReducer";
import { cartReducer } from "../reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer } from "../reducers/addToCartReducer";
const reducers = combineReducers({
  tshirts: tshirtReducer,
  hats: hatReducer,
  tshirtDetail: tshirtDetailReducer,
  hatDetail: hatDetailReducer,
  cart: cartReducer,
  addToCart:addToCartReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
