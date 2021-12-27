import * as actionTypes from "../constants/cardConstants.js";

export const cardReducers = (state = { cardItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CARD:
      const item = action.payload;

      // this line add data to shop
      // this product thats means id check in cardAction.js
      const existItem = state.cardItems.find(
        (data) => data.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map((data) =>
            data.product === existItem.product ? item : data
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
        cardItems: state.cardItems.filter(
          (data) => data.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
