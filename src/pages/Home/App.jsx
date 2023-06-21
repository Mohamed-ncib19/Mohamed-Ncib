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
        <Route path="/Mohamed-Ncib/Slide-Bar" element={<SlideBar />} />
        <Route path="/Mohamed-Ncib/About-Me" element={<About />} />
        <Route path="/Mohamed-Ncib/Works" element={<Works />} />
        <Route path="/Mohamed-Ncib/Contact" element={<Contact />} />
        <Route path="/Mohamed-Ncib/Thank-you" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
