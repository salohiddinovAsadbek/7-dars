import { Routes, Route } from "react-router";
import Sign from "../src/signup/sign";
import "../src/assets/css/style.css";
import Pricing from "./pricing/pricing";
import Home from "./home/home";
import About from "./about/about";
import Login from "./login/login";
import Blog from "./Blog/blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
