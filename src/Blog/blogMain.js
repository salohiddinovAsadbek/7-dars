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
        </div>
      </div>
    </>
  );
}

export default BlogMain;
