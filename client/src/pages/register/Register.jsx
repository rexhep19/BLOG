import axios from "axios";
import { useState } from "react";
import "./register.css";

function Register() {
  const [username, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {}
    setError(true);
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <div className="registerForm">
        <form className="registerForm" action="" onSubmit={handlesubmit}>
          <label htmlFor="userInput">Username</label>
          <input
            id="userInput"
            className="registerInput"
            type="text"
            placeholder="Write name"
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="emailinput">Email</label>
          <input
            id="emailinput"
            className="registerInput"
            type="email"
            placeholder="Write name"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="passinput">Password</label>
          <input
            id="passinput"
            className="registerInput"
            type="password"
            placeholder="Write name"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerPageBtn">Register</button>
        </form>
        <button className="registerPageLoginButton" type="submit">
          Login
        </button>
        {error && <span>Something went wrong</span>}
      </div>
    </div>
  );
}

export default Register;
