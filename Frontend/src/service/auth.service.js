// tools
import axios from "axios";

// register request
export const register = (newUser) => {
  axios
    .post("/api/register", newUser)
    .then((response) => {
      if (response.data) {
        return Promise.resolve(response.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};
