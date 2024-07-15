import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import "../../css/index.css";
import HomePage from "./HomePage";
import SlideBar from "../navbar/slideBar";
import About from "../About/About.jsx";
import Works from "../Works/Works.jsx";
import Contact from "../Contact/Contact.jsx";
import Thanks from "../Contact/Thanks";
import ErrorPage from "../404/ErrorPage";

function AppContent() {
  const location = useLocation();

  return (
    <Routes location={location} >
      <Route path="/" exact element={<HomePage />} />
      <Route path="/Slide-Bar" element={<SlideBar />} />
      <Route path="/About-Me" element={<About />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Thank-you" element={<Thanks />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

function App() {
  return (
    <MemoryRouter>
      <AppContent />
    </MemoryRouter>
  );
}

export default App;
