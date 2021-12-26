import * as actionType from "../constants/registerConstants";

const initialState = {
  isLeggedIn: false,
  user: null,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        isLeggedIn: false,
      };
    default:
      return state;
  }
};
