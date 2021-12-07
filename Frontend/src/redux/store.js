// import store
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import combine reducers
import {Reducers} from "./reducers/index";

const middleware = [thunk];
// create store
const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
