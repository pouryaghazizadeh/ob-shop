import * as actionType from "../constants/productConstants";
// this for home page
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionType.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// this for view product

export const getProductDetailsReducer = (state = { products: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionType.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };

    default:
      return state;
  }
};
