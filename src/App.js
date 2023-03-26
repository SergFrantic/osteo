import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Price from "./pages/Price/Price";
import Feedbacks from "./pages/Feedbacks/Feedbacks";
import Footer from "./components/Footer/Footer";
import Test from "./pages/Test/Test";

function App() {
  const [activeNav, setActiveNav] = useState("home")
  return (
    <div>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
      <Footer setActiveNav={setActiveNav} />
    </div>
  );
}

export default App;
