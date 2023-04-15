import axios from "axios";
import { useContext } from "react";
import { useRef } from "react";
import { Context } from "../../components/context/Context";
import "./login.css";

function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert(err.response.data); // display error message to user
    }
  };

  return (
    <div className="login">
      <div className="loginForm">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="type your username"
            ref={userRef}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="type your password"
            ref={passRef}
          />
          <button type="submit" className="loginBtn" disabled={isFetching}>
            Login
          </button>
        </form>
        <button className="registerBtn">Register</button>
      </div>
    </div>
  );
}

export default Login;
