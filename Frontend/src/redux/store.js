// import store
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import combine reducers
import { Reducers } from "./reducers/index";

const middleware = [thunk];

//keep data when refresh website
const cardFromLocalstorage = localStorage.getItem("card")
  ? JSON.parse(localStorage.getItem("card"))
  : [];
const INITIAL_STATE = {
  card: {
    cardItems: cardFromLocalstorage,
  },
};

// create store
const store = createStore(
  Reducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
