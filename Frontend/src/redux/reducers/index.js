// combine reducers
import { combineReducers } from "redux";
// 
import { cardReducers } from "./cardReducers";

export  const Reducers = combineReducers({
card:cardReducers

});

