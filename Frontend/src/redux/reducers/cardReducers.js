import * as actionTypes from "../constants/cardConstants.js";


const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cardReducers = (state=CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CARD:
      const item = action.payload;
      // this line looking for data for show in detail page
      const existItem = state.cardItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cardItems: state.cardItems.map((x) =>
            x.product === existItem.product ? item : x)
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

