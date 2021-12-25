import  { useState } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);

  return (
    <main>
      <form>
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
          placeholder="password again"
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
