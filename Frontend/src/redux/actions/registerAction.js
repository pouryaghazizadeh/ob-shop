// action type
// auth
import * as AuthService from "../../service/auth.service";
import * as actionType from "../constants/registerConstants";
// register action
export const registerAction = (payload) => (dispatch) => {
  AuthService.register(payload)
    .then((response) => {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        payload:response.data ,
       });
       return Promise.resolve(response.data)
    })
    .catch((error)=>{
         dispatch({
           type: actionType.REGISTER_FAIL,
           payload: {err:error.massage||"registration failed"},
         });
    }

    );
};


// login action
