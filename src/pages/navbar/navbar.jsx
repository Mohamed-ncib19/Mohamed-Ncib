import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Bars from "../icons/bars";
import CloseIcon from "../icons/CloseIcon";
import SlideBar from "./slideBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0  z-40 text-white flex flex-row justify-between items-center p-6 transition-all duration-500 bg-transparent backdrop-blur-sm`}
      >
        {/* Logo with gradient animation */}
        <Link to="/" className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          <h4 className="relative md:text-[30px] text-[20px] font-bold transition-all duration-500 group-hover:scale-105">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Mohamed
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">
              Ncib
            </span>
            <span className="text-purple-400 ml-2">&lt;/&gt;</span>
          </h4>
        </Link>

        {/* Menu button with hover effect */}
        <button
          className="relative text-[40px] p-2 rounded-full hover:bg-purple-500/10 transition-all duration-300 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="relative">
            {isOpen ? (
              <CloseIcon className="text-[30px] text-white" />
            ) : (
              <Bars />
            )}
          </div>
        </button>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-[80px]"></div>

      <SlideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
