import User from "../img/User.svg";
import Eye from "../img/eye.svg";
import "../assets/signMain.css";
import { NavLink } from "react-router";
import logo from "../img/facebook.svg";
import logo1 from "../img/google.svg";
import logo2 from "../img/apple.svg";
import { useState } from "react";

function LoginMain() {
  const [username, setUserName] = useState("");
  const [userpassword, setUserPassword] = useState("");
  let userInfo = JSON.parse(localStorage.getItem("user")) || [];

  const Login = () => {
    if (username !== "" && userpassword !== "") {
      if (userInfo.length > 0) {
        userInfo[0] = {
          name: username,
          password: userpassword,
        };
      } else if (userInfo.length === 0) {
        userInfo.push({
          name: username,
          password: userpassword,
        });
      }
    }

    localStorage.setItem("user", JSON.stringify(userInfo));
  };
  return (
    <div className="signMain">
      <h1 className="signTitle">Log in</h1>
      <p>Login into existing account.</p>
      <div className="signForm">
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <img src={User} alt="user" />
          <p></p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <img src={Eye} alt="user" />
          <p></p>
        </div>
        <button onClick={Login}>
          <NavLink to="/home">Log In</NavLink>
        </button>
      </div>
      <h1 className="or">Or</h1>
      <p className="orInfo">Log in with...</p>
      <div className="logoSignUp">
        <div>
          <img src={logo} alt="logo" />
          <NavLink to="https://web.telegram.org/k/#@salohiddinovportfolio">
            Sign up with Facebook
          </NavLink>
        </div>
        <div>
          <img src={logo1} alt="logo" />
          <NavLink to="https://web.telegram.org/k/#@asadbek2008s">
            Sign up with Google
          </NavLink>
        </div>
        <div>
          <img src={logo2} alt="logo" />
          <NavLink to="https://www.instagram.com/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">
            Sign up with Apple
          </NavLink>
        </div>
      </div>
      <p className="already">
        Don't have an account? <NavLink to="/signup">Create One.</NavLink>
      </p>
    </div>
  );
}

export default LoginMain;
