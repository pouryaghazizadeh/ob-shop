// combine reducers
import { combineReducers } from "redux";
//reducer
import { cardReducers } from "./cardReducers";
import { getDataHomeReducer } from "./homeReducer";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./productReducers";
import { registerReducer } from "./registerReducer";
export const Reducers = combineReducers({
  card: cardReducers,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getDataHome: getDataHomeReducer,
  register: registerReducer,
});
