import ExpertImg from "../img/experts.png";
import "../assets/experts.css";

function Experts() {
  return (
    <div className="experts">
      <h1>Experts Agree</h1>
      <img src={ExpertImg} alt="backimg" />
      <div>
        <h1>
          We've helped over 1,000 creatorsre claim control of their audience.
        </h1>
      </div>
    </div>
  );
}

export default Experts;
