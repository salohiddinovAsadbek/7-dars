import Navbar from "../components/navbar";
import AboutMain from "./aboutMain";
import "../assets/about.css";
import Footer from "../components/footer";
function About() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AboutMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default About;
