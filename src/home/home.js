import Navbar from "../components/navbar";
import HomeMain from "./homeMain";
import Content from "./content";
import Share from "./share";
import Email from "./email";
import Experts from "./experts";
import Footer from "../components/footer";
function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeMain />
        <Content />
        <Share />
        <Email />
        <Experts />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
