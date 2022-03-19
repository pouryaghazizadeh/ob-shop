// tools
import axios from "axios";

// register request
const register = async (newUser) => {
  return await axios
    .post("/api/register", newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

// login request
const login = (userCredential) => {
  return axios
    .post("api/login", userCredential)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("x-auth-token", response);
        return Promise.resolve(response);
      }else{
        console.log("you have problemccccc");
      }
      
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// export functions
export { register, login };
