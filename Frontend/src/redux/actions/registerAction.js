// action type
// auth
import * as AuthService from "../../service/auth.service";
import * as actionType from "../constants/registerConstants";
// register action
export const registerAction = (payload) => (dispatch) => {
  return AuthService.register(payload)
    .then((response) => {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        payload: response,
      });
      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch({
        type: actionType.REGISTER_FAIL,
        payload: { err: error.massage || "registration failed" },
      });
      return Promise.reject(error);
    });
};

// login action
export const logonAction = (userCredential) => (dispatch) => {
  return AuthService.login(userCredential)
    .then((data) => {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: data,
      });
      return Promise.resolve(data);
    })
    .catch((error) => {
      dispatch({
        type: actionType.LOGIN_FAIL,
        payload: { err: error.massage || "login failed" },
      });
      return Promise.reject(error);
    });
};
