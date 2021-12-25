// action type Product
// tools
import axios from "axios";
import * as actionTypes from "../constants/homeConstants";

export const getDataHome = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_HOME_REQUEST });
    const { data } = await axios.get("/api/");
    dispatch({
      type: actionTypes.GET_HOME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_HOME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
