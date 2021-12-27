import * as actionType from "../constants/homeConstants";
// this for home page
export const getDataHomeReducer = (state = { dataHome: [] }, action) => {
  switch (action.type) {
    case actionType.GET_HOME_REQUEST:
      return {
        loading: true,
        dataHome: [],
      };
    case actionType.GET_HOME_SUCCESS:
      return {
        loading: false,
        dataHome: action.payload,
      };

    case actionType.GET_HOME_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
