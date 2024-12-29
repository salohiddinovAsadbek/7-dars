import User from "../img/User.svg";
import Eye from "../img/eye.svg";
import Email from "../img/email.svg";
import "../assets/signMain.css";
import { NavLink } from "react-router";
import logo from "../img/facebook.svg";
import logo1 from "../img/google.svg";
import logo2 from "../img/apple.svg";
import { useState } from "react";
function SignMain() {
  const [username, setUserName] = useState("");
  let [userpassword, setUserPassword] = useState("");
  const [useremail, setUserEmail] = useState("");
  let userInfo = JSON.parse(localStorage.getItem("user")) || [];

  const signUp = () => {
    if (username !== "" && userpassword !== "" && useremail !== "") {
      if (userInfo.length > 0) {
        userInfo[0] = {
          name: username,
          password: userpassword,
          email: useremail,
        };
        fetch("http://192.168.43.117:5000/user/createUser", {
          method: "POST",
          headers: { "Content-type": "application/json" },
        });
      } else if (userInfo.length === 0) {
        userInfo.push({
          name: username,
          password: userpassword,
          email: useremail,
        });

        console.log("yoq");
      }
    }

    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const [userEye, setShow] = useState("text");
  const [usecss, setLine] = useState("0vw");
  const Eyehide = () => {
    if (userEye === "text") {
      setShow("password");
      setLine("calc(40 / 19.2 * 1vw)");
    } else {
      setShow("text");
      setLine("0vw");
    }
  };

  let harflar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let belgilar =
    "!@#$%^&*()_+{}|:>?<¡™£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ“åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷";
  let sonlar = "1234567890";

  let [useKey, setCheck] = useState("");
  let [enough, setEnough] = useState("");
  const tek = (userpassword) => {
    let harf = false;
    let belgi = false;
    let son = false;
    let sum = 0;
    for (let i = 0; i < harflar.length; i++) {
      if (harflar.includes(userpassword[i]) && !harf) {
        harf = true;
        sum++;
      }

      if (belgilar.includes(userpassword[i]) && !belgi) {
        belgi = true;
        sum++;
      }

      if (sonlar.includes(userpassword[i]) && !son) {
        son = true;
        sum++;
      }
    }

    setCheck(sum);

    if (useKey === 1) {
      setEnough("enough1");
    } else if (useKey === 2) {
      setEnough("enough2");
    } else if (useKey === 3) {
      setEnough("enough3");
    } else {
      setEnough("");
    }
  };

  return (
    <div className="signMain">
      <h1 className="signTitle">Sign up</h1>
      <p>Fill all field for create an account.</p>
      <div className="signForm">
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="signUpBtns">
            <img src={User} alt="user" />
          </button>
          <p></p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button className="signUpBtns">
            <img src={Email} alt="user" />
          </button>
          <p></p>
        </div>
        <div>
          <input
            type={userEye}
            placeholder="Password"
            onChange={(e) => {
              setUserPassword(e.target.value);
              tek(e.target.value);
            }}
          />
          <button className="signUpBtns" onClick={Eyehide}>
            <img src={Eye} alt="user" />
            <p
              className="linePassword"
              style={{ height: usecss }}
              onClick={Eyehide}
            ></p>
          </button>
          <p className="enoughPassword">
            <span className={enough}></span>
            <span className={enough}></span>
            <span className={enough}></span>
          </p>
        </div>
        <button onClick={signUp}>
          <NavLink to="/signup">Sign Up</NavLink>
        </button>
      </div>
      <h1 className="or">Or</h1>
      <p className="orInfo">Sign up with...</p>
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
        Already have an account? Please <NavLink to="/login">Log in.</NavLink>
      </p>
    </div>
  );
}

export default SignMain;
