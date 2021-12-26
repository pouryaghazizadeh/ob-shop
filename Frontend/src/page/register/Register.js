import { useState } from "react";
import {useDispatch}from "react-redux"
import { registerAction } from "../../redux/actions/registerAction";


function Register() {
  const dispatch = useDispatch()
  // state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  // on form submit event handler
  const handelSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName,
      email,
      password,
      checkPassword,
    };

    const validate = dispatch(registerAction(newUser))
    validate.then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })
  };
  return (
    <main>
      <h2>hhhhhhhh</h2>
      <h2>hhhhhhhh</h2>
      <h2>hhhhhhhh</h2>
      <h2>hhhhhhhh</h2>
      <h2>hhhhhhhh</h2>
      <h2>hhhhhhhh</h2>
      <h2>hhhhhhhh</h2>
      <h2>hhhhhhhh</h2>
      <form method="post" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="userName"
          onChange={(e) => {
            setUserName(e.target.value);
          } } />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          } } />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          } } />
        <input
          type="password"
          placeholder="verify password "
          onChange={(e) => {
            setCheckPassword(e.target.value);
          } } />
        <button>login</button>
      </form>
    </main>
  );
};

export default Register;
