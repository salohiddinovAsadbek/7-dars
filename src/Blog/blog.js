import Navbar from "../components/navbar";
import BlogMain from "./blogMain";
import Footer from "../components/footer";
function Blog() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BlogMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Blog;
