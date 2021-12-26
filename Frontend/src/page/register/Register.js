import  { useState } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
// on form submit event handler
const handelSubmit = (e)=>{
e.preventDefault()
const newUser = {
  userName,
  email,
  password,
  checkPassword,
};
console.log(newUser);
}
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
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="verify password "
          onChange={(e) => {
            setCheckPassword(e.target.value);
          }}
        />
        <button>login</button>
      </form>
    </main>
  );
}

export default Register;
