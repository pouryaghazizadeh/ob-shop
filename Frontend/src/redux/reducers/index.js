// combine reducers
import { combineReducers } from "redux";
//reducer
import { cardReducers } from "./cardReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./productReducers";
import {getDataHomeReducer} from "./homeReducer"
export const Reducers = combineReducers({
  card: cardReducers,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getDataHome: getDataHomeReducer,
});
