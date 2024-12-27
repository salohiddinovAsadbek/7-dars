import "../assets/blog.css";
import Blog1 from "../img/blog1.svg";

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
