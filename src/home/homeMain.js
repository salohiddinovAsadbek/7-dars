import { NavLink } from "react-router";
import "../assets/css/homeMain1.css";
import Dot from "../img/Dot.svg";
import Smile from "../img/smile.svg";
import Smile2 from "../img/smile2.svg";
import Smile3 from "../img/smile3.svg";

function HomeMain() {
  return (
    <div className="audience">
      <h1>
        <span>Own your audience.</span>
        <span>So you don't lose them.</span>
      </h1>
      <div>
        <p>Turn your audience into email and text message subscribers.</p>
        <div className="audienceBtns">
          <button>
            <NavLink to="/signup">Get Started Now</NavLink>
          </button>
          <button>
            <NavLink to="/signup">View A Demo</NavLink>
          </button>
        </div>
        <div className="audienceCreators">
          <img src={Dot} alt="dot" />
          <span>1000+</span>
          <span>creators have already started</span>
        </div>
      </div>
      <div className="marico">
        <h1>Why Creators Love Marico</h1>
        <div className="maricoWrapper">
          <div>
            <p>
              <span>
                <img src={Smile} alt="smile" className="smile" />
              </span>
              <span>Reduced Anxiety</span>
            </p>
            <p>Never worry about losing your audience.</p>
          </div>
          <div>
            <p>
              <span>
                <img src={Smile2} alt="smile" className="smile2" />
              </span>
              <span>Lower Workload</span>
            </p>
            <p>Just share one link. We'll handle the rest.</p>
          </div>
          <div>
            <p>
              <span>
                <img src={Smile3} alt="smile" className="smile3" />
              </span>
              <span>More Time</span>
            </p>
            <p>Spend less time on marketing tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
