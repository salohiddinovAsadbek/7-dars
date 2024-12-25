import "../assets/content.css";
import { NavLink } from "react-router";
import "../assets/email.css";

function Email() {
  return (
    <div className="content">
      <p className="homeSteps">STEP 3</p>
      <h1 className="homeTitles">Send Emails & Text Messages</h1>
      <p className="homeInfos">
        No more going through a social platform. Reach and engage your audience
        directly over email and text massage.
      </p>

      <div className="contentWrapper emailWrapper">
        <div>
          <p>Create & Share</p>
          <h1>Reach Your</h1>
          <h1>
            <span>Audience</span>
            <span>Directly.</span>
          </h1>
          <p className="contentP">
            <span>1</span>
            <span>Embed content or create something new to share.</span>
          </p>
          <p className="contentP contentP2">
            <span>2</span>
            <span>
              Share content over email, text message or your homepage.
            </span>
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

export default Email;
