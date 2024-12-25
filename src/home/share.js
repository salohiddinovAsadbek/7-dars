import "../assets/content.css";
import { NavLink } from "react-router";
import Mobile from "../img/mobile.png";
import "../assets/share.css";

function Share() {
  return (
    <div className="content">
      <p className="homeSteps">STEP 2</p>
      <h1 className="homeTitles">Share Your Homepage</h1>
      <p className="homeInfos">
        Share your Wavium homepage link with your followers, and we'll handle
        the rest.
      </p>

      <div className="shareWrapper">
        <div>
          <p>One Link</p>
          <h1 className="shareTitle">ALL You Create.</h1>
          <h1>One Link</h1>
          <img src={Mobile} alt="mobile" />
        </div>
        <div>
          <p>Collect Subscribers</p>
          <h1 className="shareTitle">Emails.</h1>
          <h1 className="shareTitle">Phone #s.</h1>
          <h1>All Yours.</h1>
        </div>
      </div>
      <button className="shareBtn">
        <NavLink to="/signup">Get Started</NavLink>
      </button>
    </div>
  );
}

export default Share;
