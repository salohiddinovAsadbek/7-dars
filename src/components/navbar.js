import { NavLink } from "react-router";
import Mainlogo from "../img/navlogo.svg";
import "../assets/css/navbar.css";
function Navbar() {
  const links = [
    {
      nav: "About",
      link: "/about",
    },
    {
      nav: "Pricing",
      link: "/pricing",
    },
    {
      nav: "Blog",
      link: "/blog",
    },
  ];
  return (
    <div className="navbar">
      <NavLink to="/signup">
        <img src={Mainlogo} alt="mainlogo" />
      </NavLink>
      <nav>
        <NavLink to="/signup">Use Cases</NavLink>
        {links.map((e) => {
          return <NavLink to={e.link}>{e.nav}</NavLink>;
        })}
      </nav>

      <div className="navbarLog">
        <NavLink to="/login">Login</NavLink>
        <button className="signUpBtn">
          <NavLink to="/signup">Signup</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
