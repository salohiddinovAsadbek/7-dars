import "../assets/content.css";
import { NavLink } from "react-router";

function Content() {
  return (
    <div className="content">
      <p className="homeSteps">STEP 1</p>
      <h1 className="homeTitles">Connect Your Content</h1>
      <p className="homeInfos">
        Bring all of your content together and get a Homepage that automatically
        updates whenever you create anywhere online.
      </p>
      <button>
        <NavLink to="/blog">View Avaliable Sources</NavLink>
      </button>
      <div className="contentWrapper">
        <div>
          <p>Your Homepage</p>
          <h1>Your Content.</h1>
          <h1>
            <span>All in</span>
            <span>One Spot</span>
          </h1>
          <p className="contentP">
            <span>1</span>
            <span>Bring all of your content together into one homepage.</span>
          </p>
          <p className="contentP contentP2">
            <span>2</span>
            <span>Your page automatically updates whenever you create.</span>
          </p>

          <div className="contentBtns">
            <button>
              <NavLink to="/signup">Get Started Now</NavLink>
            </button>
            <button>
              <NavLink to="/signup">View A Demo</NavLink>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Content;
