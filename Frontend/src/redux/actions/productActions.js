// action type Product
// tools
import axios from "axios";
import * as actionTypes from "../constants/productConstants";
// this will go to home page
export const getProducts= () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.respose.data.message
          : error.message,
    });
  }
};


export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`,);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.respose.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
