// tools
import axios from "axios";

// register request
const register = (newUser) => {
  return axios
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
    .post("/login", userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("x-auth-token", response.data.token);
      }
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

// export functions
export { register, login };
