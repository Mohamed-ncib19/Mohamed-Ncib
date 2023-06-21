import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../css/index.css";
import HomePage from "./HomePage";
import SlideBar from "../navbar/slideBar";
import About from "../About/About.jsx";
import Works from "../Works/Works.jsx";
import Contact from "../Contact/Contact.jsx";
import Thanks from "../Contact/Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Mohamed-Ncib" exact element={<HomePage />} />
        <Route path="/Slide-Bar" element={<SlideBar />} />
        <Route path="/About-Me" element={<About />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Thank-you" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
