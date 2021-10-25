import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tshirtReducer } from "../reducers/tshirtReducer";
import { hatReducer } from "../reducers/hatReducer";
import { tshirtDetailReducer } from "../reducers/tshirtDetailReducer";
import { hatDetailReducer } from "../reducers/hatDetailReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = combineReducers({
  tshirts: tshirtReducer,
  hats: hatReducer,
  tshirtDetail: tshirtDetailReducer,
  hatDetail: hatDetailReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
