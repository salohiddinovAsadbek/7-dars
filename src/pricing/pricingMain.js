import Check from "../img/Check.svg";
import { NavLink } from "react-router";
import "../assets/pricing.css";
function PricingMain() {
  return (
    <div className="pricingMain">
      <h1>Choose the plan that's right for you.</h1>
      <div className="pricingWrapper">
        <div className="pricingCard">
          <h1>Starer</h1>
          <p className="priceWhite">Perfect for tying out Wavium</p>
          <h1>Free</h1>
          <p className="priceWhite">Collect Unlimited subscribers</p>
          <p className="priceWhite">500 monthly emails</p>
          <p className="priceWhite">Upgrade to send more emails</p>
          <p className="priceWhite">Key features</p>
          <p>
            <span>
              <img src={Check} alt="check" />
            </span>
            <span className="priceWhite">Automatic updating home page</span>
          </p>
          <p>
            <span>
              <img src={Check} alt="check" />
            </span>
            <span className="priceWhite">Unlimited sources + posts</span>
          </p>
          <div>
            <button className="pricingBtns">
              <NavLink to="/signup" className="priceBlue">
                Start For Free
              </NavLink>
            </button>
          </div>
        </div>
        <div className="pricingCard">
          <h1>Basic</h1>
          <p className="priceWhite">Build your online home</p>
          <h1 className="pricingPrice">
            <span>$14</span>
            <br />
            <span>Per month</span>
          </h1>
          <p className="priceWhite">Collect Unlimited subscribers</p>
          <p className="priceWhite">2,000 free monthl emails</p>
          <p className="priceWhite">Purchase more for $0.002 per email</p>
          <p className="priceWhite">Everything in starter, plus</p>
          <p>
            <span>
              <img src={Check} alt="check" />
            </span>
            <span className="priceWhite">Remove Wavium branding</span>
          </p>
          <p>
            <span>
              <img src={Check} alt="check" />
            </span>
            <span className="priceWhite">Embed Wavium on your own domain</span>
          </p>
          <div>
            <button className="pricingBtns">
              <NavLink to="/signup" className="priceBlue">
                Start Free 14-day Trial
              </NavLink>
            </button>
          </div>
        </div>
        <div className="pricingCard">
          <h1>Complete</h1>
          <p className="priceWhite">Enhanced engagement</p>
          <h1 className="pricingPrice">
            <span>$29</span>
            <br />
            <span className="priceWhite">Per month</span>
          </h1>
          <p className="priceWhite">Collect Unlimited subscribers</p>
          <p className="priceWhite">10,000 free monthly emails</p>
          <p className="priceWhite">Purchase more for $0.002 per email</p>
          <p className="priceWhite">Everything in basic, plus</p>
          <p>
            <span>
              <img src={Check} alt="check" />
            </span>
            <span className="priceWhite">Collect text massage subscribers</span>
          </p>
          <p>
            <span>
              <img src={Check} alt="check" />
            </span>
            <span className="priceWhite">Share posts over text massage</span>
          </p>
          <div>
            <button className="pricingBtns">
              <NavLink to="/signup" className="priceBlue">
                Start Free 14-day Trial
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingMain;
