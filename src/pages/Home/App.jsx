import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../../css/index.css'
import HomePage from './HomePage'
import SlideBar from "../navbar/slideBar";
import About from "../About/About.jsx";
import Works from "../Works/Works.jsx";
import Contact from "../Contact/Contact.jsx";
import Thanks from "../Contact/Thanks";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Portfolio" element={<HomePage />} />
      <Route path="/Portfolio/Slide-Bar" element={<SlideBar />} />
      <Route path="/Portfolio/About-Me" element={<About />} />
      <Route path="/Portfolio/Works" element={<Works />} />
      <Route path="/Portfolio/Contact" element={<Contact />} />
      <Route path="/Portfolio/Thank-you" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
      )
}

export default App
