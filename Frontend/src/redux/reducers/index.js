// combine reducers
import { combineReducers } from "redux";
// 
import { cardReducers } from "./cardReducers";
import {getProductDetailsReducer,getProductsReducer} from "./productReducers"

export  const Reducers = combineReducers({
  card: cardReducers,
  getProduct: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

