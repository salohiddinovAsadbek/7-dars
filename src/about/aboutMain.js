import aboutLogo from "../img/aboutLogo.svg";
import about1 from "../img/about1.svg";
import about2 from "../img/about2.svg";
import about3 from "../img/about3.svg";
import aboutArrow from "../img/aboutArrow.svg";

function AboutMain() {
  return (
    <>
      <div className="about">
        <img src={aboutLogo} alt="logo" />
        <p className="aboutMisson">OUR MISSION</p>
        <h1 className="aboutTitle">
          We exist to help creators own their audience.
        </h1>
        <p>
          We believe that social platforms are taking advantage of creators. We
          want to change that and help creators fight back.
        </p>
        <p>
          Building a career on social platforms is like building a home on
          someone else's land. While social platforms are great for discovering
          and reaching your audience, your goal as a creator should be to
          convert your followers into email or text message subscribers. Why?
          Look no further than TikTok. Almost overnight, millions of creative
          people almost lost their careers.
          <br />
          <br />
          If a platform removes your account, or their algorithm for
          distribution no longer favours you, are you prepared?
          <br /> <br />
          If you want to build a career as a creator, your focus should be on
          building durable distribution channels. Without distribution, you have
          no business. So how can you build an audience that you actually own?
          With emails and phone numbers. These distribution channels are direct.
          Instead of going through some algorithm, when you share over email and
          text message, you know that your audience will see your content. Even
          better is the fact that you own these lists. Instagram removes your
          acount, you're ok. YouTube changes their algorithm, you're ok. You own
          your audience. <br /> <br />
          We built Marico to make this process easy, fast, and effective. The
          traditional solution to this problem involves spending days building a
          website or hiring someone expensive to do it for you. But those days
          are gone. With Marico, you get a portfolio that is always up-to-date
          and converts visitors into email or text message subscribers. The best
          thing? It takes under 5 minutes to setup, and it automatically updates
          whenever you post new content anywhere online. We believe the best
          tools are the ones you don't even notice. Marico helps you build your
          own audience, without any hassle or time commitment. All you have to
          do is share your portfolio link with your audience, and we'll handle
          the rest. <br /> <br />
          You can also create posts from within Marico and share them in just a
          few clicks to your portfolio, and to your email and text message
          subscribers. Since all of your content is already in Marico, creating
          content takes minutes, not hours. <br />
          <br />
          For too long, social platforms have taken advantage of creators. Fight
          back and build an audience that you own.
        </p>
        <p>- The Team Marico (Olivia, William, and Noah)</p>
        <p className="aboutLine"></p>
      </div>
      <div className="ourTeam">
        <p className="aboutMisson">OUT TEAM</p>
        <h1 className="aboutTitle">We love creators</h1>
        <div className="aboutWrapper">
          <div>
            <img src={about1} alt="about" />
            <h1>Jacob Mark</h1>
            <p>CEO & Design</p>
            <p>
              <span>Twitter</span>
              <span>
                <img src={aboutArrow} alt="about" />
              </span>
            </p>
          </div>
          <div>
            <img src={about2} alt="about" />
            <h1>Daniel</h1>
            <p>CTO & Development</p>
            <p>
              <span>Twitter</span>
              <span>
                <img src={aboutArrow} alt="about" />
              </span>
            </p>
          </div>
          <div>
            <img src={about3} alt="about" />
            <h1>Ryan Trump</h1>
            <p>COO & Sales</p>
            <p>
              <span>Twitter</span>
              <span>
                <img src={aboutArrow} alt="about" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMain;
