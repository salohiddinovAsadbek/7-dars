import User from "../img/User.svg";
import Eye from "../img/eye.svg";
import Email from "../img/email.svg";
import "../assets/signMain.css";
import { NavLink } from "react-router";
import logo from "../img/facebook.svg";
import logo1 from "../img/google.svg";
import logo2 from "../img/apple.svg";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function SignMain() {
  let [username, setUserName] = useState("");
  let [userpassword, setUserPassword] = useState("");
  let [useremail, setUserEmail] = useState("");
  let userInfo = JSON.parse(localStorage.getItem("user")) || [];
  let [userCheck, setUserCheck] = useState(null);
  let current = new Date();

  let currentMonth = current.getMonth();
  switch (currentMonth) {
    case 0:
      currentMonth = "January";
      break;
    case 1:
      currentMonth = "February";
      break;
    case 2:
      currentMonth = "March";
      break;
    case 3:
      currentMonth = "April";
      break;
    case 4:
      currentMonth = "May";
      break;
    case 5:
      currentMonth = "June";
      break;
    case 6:
      currentMonth = "July";
      break;
    case 7:
      currentMonth = "August";
      break;
    case 8:
      currentMonth = "September";
      break;
    case 9:
      currentMonth = "October";
      break;
    case 10:
      currentMonth = "November";
      break;
    case 11:
      currentMonth = "December";
      break;
    default:
      currentMonth = "none";
      break;
  }

  let currentDate = current.getDate();
  switch (currentDate) {
    case 1:
      currentDate = "first";
      break;
    case 2:
      currentDate = "second";
      break;
    case 3:
      currentDate = "third";
      break;
    default:
      currentDate += "th";
      break;
  }

  const signUp = () => {
    if (username !== "" && userpassword !== "" && useremail !== "") {
      if (userInfo.length > 0) {
        userInfo[0] = {
          name: username,
          password: userpassword,
          email: useremail,
        };
      } else if (userInfo.length === 0) {
        userInfo.push({
          name: username,
          password: userpassword,
          email: useremail,
        });
      }

      fetch("http://localhost:3000/users")
        .then((response) => {
          return response.json();
        })
        .then((response2) => {
          response2.map((inson) => {
            if (
              inson.name === username &&
              inson.userpassword === userpassword
            ) {
              setUserCheck(true);
            } else {
              setUserCheck(false);
            }
          });
        });

      setUserName("");
      setUserPassword("");
      setUserEmail("");
    }
    toast.success("Good Job!");

    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  useEffect(() => {
    if (userCheck) {
      toast.error("Bunday foydalanuvchi mavjud");
    } else {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          mail: useremail,
          userpassword: userpassword,
          signUpDate: `${currentMonth} of the ${currentDate} in  ${current.getFullYear()} at ${current.getHours()} : ${current.getMinutes()}`,
          updatedSignUp: `${currentMonth} of the ${currentDate} in  ${current.getFullYear()} at ${current.getHours()} : ${current.getMinutes()}`,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userCheck]);

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
            value={username}
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
            value={useremail}
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
            }}
            value={userpassword}
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
            {/* <span className={enough}></span>
            <span className={enough}></span>
            <span className={enough}></span> */}
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
