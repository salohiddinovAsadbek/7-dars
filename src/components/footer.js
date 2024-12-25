import footerLogo from "../img/footerLogo.svg";
import { NavLink } from "react-router";
import DotFooter from "../img/Dot.svg";
import "../assets/footer.css";
import footerLogo2 from "../img/footerLogo2.svg";
function Footer() {
  return (
    <>
      <div className="footerTop">
        <img src={footerLogo} alt="logo" />
        <h1>Get Started Now</h1>
        <p>Setup is easy and takes under 5 minutes.</p>
        <button>
          <NavLink to="/signup">Get Started Now</NavLink>
        </button>
        <div>
          <img src={DotFooter} alt="dot" />
          <span>1000+</span>
          <span>creators have already started</span>
        </div>
      </div>
      <div className="footerBottom">
        <img src={footerLogo2} alt="footer" />
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/signup">Sign in</NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
