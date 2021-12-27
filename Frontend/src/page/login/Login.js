import { useState } from "react";
import { useDispatch } from "react-redux";
import { logonAction } from "../../redux/actions/registerAction";
function Login() {
  const dispatch = useDispatch();
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // handle login
  const handleSubmit = () => {
    const userCredential = {
      email,
      password,
    };
    const ab = {
      email:"dfggh@gmail.com",
      password:"123456765432",
    };
    const login = dispatch(logonAction(ab));
    login
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <h1>heloooo</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">login</button>
      </form>
    </main>
  );
}

export default Login;
