import Navbar from "../components/navbar";
import PricingMain from "./pricingMain";
import Footer from "../components/footer.js";
function Pricing() {
  return (
    <>
      <header>
        <Navbar />
        <PricingMain />
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Pricing;
