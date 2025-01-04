import User from "../img/User.svg";
import Eye from "../img/eye.svg";
import "../assets/signMain.css";
import { NavLink } from "react-router";
import logo from "../img/facebook.svg";
import logo1 from "../img/google.svg";
import logo2 from "../img/apple.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginMain() {
  let [username, setUserName] = useState("");
  let [userpassword, setUserPassword] = useState("");
  let userInfo = JSON.parse(localStorage.getItem("user")) || [];
  let [useCheck, setCheck] = useState([]);
  let [eyeHide, setHide] = useState("password");
  let [styleCss, setStyle] = useState("0vw");
  let navigate = useNavigate();
  fetch("http://localhost:3000/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCheck(data);
    })
    .catch((error) => {
      console.log(error);
    });
  const Login = () => {
    const userExist = useCheck.some((inson) => {
      return inson.name === username && inson.userpassword === userpassword;
    });

    if (userExist) {
      navigate("/home");
      setUserName("");
      setUserPassword("");
    } else {
      alert("notogri");
      setUserName("");
      setUserPassword("");
    }
  };

  const Hide = () => {
    if (eyeHide === "password") {
      setHide("text");
      setStyle("calc(32 / 19.2 * 1vw)");
    } else {
      setHide("password");
      setStyle("0vw");
    }
  };

  localStorage.setItem("user", JSON.stringify(userInfo));

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
            value={username}
          />
          <button>
            <img src={User} alt="user" />
          </button>
          <p></p>
        </div>
        <div>
          <input
            type={eyeHide}
            placeholder="Password"
            value={userpassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button onClick={Hide}>
            <img src={Eye} alt="user" />
            <p className="linePass" style={{ width: styleCss }}></p>
          </button>
          <p></p>
        </div>
        <button onClick={Login}>
          <NavLink>Log In</NavLink>
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
