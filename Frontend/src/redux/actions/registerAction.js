import * as actionType from "../constants/registerConstants"

// register action
export const registerAction = (payload)=>{
   return{
       type: actionType.REGISTER_SUCCESS,
        payload
   }
}


