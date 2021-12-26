import * as actionType from "../constants/registerConstants";

const initialState = {
  isLeggedIn: false,
  user: null,
 
};

export const registerReducer = (state = initialState, action) => {
  switch ((action.type)) {
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        isLeggedIn: false,
      };
    case actionType.REGISTER_FAIL:
      return {
        ...state,
        isLeggedIn: false,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLeggedIn: true,
        user: null,//change this line payload.user
      };
    case actionType.LOGIN_FAIL:
      return {
        ...state,
        isLeggedIn: false,
        user: null,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        isLeggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
