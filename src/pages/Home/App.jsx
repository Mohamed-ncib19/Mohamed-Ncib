import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import "../../css/index.css";
import HomePage from "./HomePage";
import SlideBar from "../navbar/slideBar";
import About from "../About/About.jsx";
import Works from "../Works/Works.jsx";
import Contact from "../Contact/Contact.jsx";
import Thanks from "../Contact/Thanks";
import ErrorPage from "../404/ErrorPage";
import LiquidEther from "@/components/LiquidEther";


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
    <>
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={22}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={true}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={0}
        autoRampDuration={0}
        style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}
        className="inset-0 -z-10"
      />
      <MemoryRouter>
        <AppContent />
      </MemoryRouter>
    </>
  );
}

export default App;
