import * as actionTypes from "../constants/cardConstants.js";

export const cardReducers = (state={ cardItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CARD:
      const item = action.payload;

      const existItem = state.cardItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CARD:
      return {
        ...state,
        cardItems: state.cardItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
