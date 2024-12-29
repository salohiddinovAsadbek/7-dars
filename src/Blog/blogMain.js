import "../assets/blog.css";
import Blog1 from "../img/blog1.svg";
import Blog2 from "../img/blog2.svg";
import Blog3 from "../img/blog3.svg";
import Blog4 from "../img/blog4.svg";
import Blog5 from "../img/blog5.svg";
import Blog7 from "../img/blog7.svg";
import Blog8 from "../img/blog8.svg";
import Blog9 from "../img/blog9.svg";
import Blog10 from "../img/blog10.svg";
import Blog11 from "../img/blog11.svg";
import Blog12 from "../img/blog12.svg";

function BlogMain() {
  return (
    <>
      <div className="blog">
        <h1 className="blogTitle">Content Sources</h1>;
        <p className="blogInfo">
          Connect these sources to your Marico homepage.
        </p>
        ;
        <div className="blogWrapper">
          <div>
            <img src={Blog1} alt="bloglogo" />
            <h1 className="blogCardTitle">Twitter</h1>
            <p>Connect your Twitter feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog2} alt="bloglogo" />
            <h1 className="blogCardTitle">YouTube</h1>
            <p>Connect your YouTube feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog3} alt="bloglogo" />
            <h1 className="blogCardTitle">WordPress</h1>
            <p>Connect WordPress feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog4} alt="bloglogo" />
            <h1 className="blogCardTitle">Substack</h1>
            <p>Connect your Substack feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog5} alt="bloglogo" />
            <h1 className="blogCardTitle">Medium</h1>
            <p>Connect your Medium feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog3} alt="bloglogo" />
            <h1 className="blogCardTitle">RSS Feeds</h1>
            <p>Connect your RSS feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog7} alt="bloglogo" />
            <h1 className="blogCardTitle">Spotify</h1>
            <p>Connect your Spotify feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog8} alt="bloglogo" />
            <h1 className="blogCardTitle">Anchor</h1>
            <p>Connect your Anchor feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog9} alt="bloglogo" />
            <h1 className="blogCardTitle">Apple Podcasts</h1>
            <p>Connect your Apple Podcast Marico homepage.</p>
          </div>
          <div>
            <img src={Blog10} alt="bloglogo" />
            <h1 className="blogCardTitle">Instagram</h1>
            <p>Connect your Instagram feed to Marico homepage.</p>
          </div>
          <div>
            <img src={Blog11} alt="bloglogo" />
            <h1 className="blogCardTitle">Linkedin</h1>
            <p>Connect your Linkedin feed to your Marico homepage.</p>
          </div>
          <div>
            <img src={Blog12} alt="bloglogo" />
            <h1 className="blogCardTitle">Fackbook</h1>
            <p>Connect your Fecebook feed to Marico homepage.</p>
          </div>
        </div>
        <div className="blogBack">
          <h1>
            We've helped over 1,000 creatorsre claim control of their audience.
          </h1>
        </div>
      </div>
    </>
  );
}

export default BlogMain;
