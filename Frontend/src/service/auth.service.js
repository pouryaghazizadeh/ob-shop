// tools
import axios from "axios";

// register request
const register = async (newUser) => {
  return await axios
    .post("/api/register", newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// login request
const login = (userCredential) => {
  return axios
    .post("/api/login", userCredential)
    .then((response) => {
      if (response) {
        localStorage.setItem("x-auth-token", response);
      }
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// export functions
export { register, login };
