import { Link } from "react-router-dom";
import ViewMoreIcon from "../icons/viewMore";

const ContactHome = () => {
  return (
    <div className="relative text-white bg-transparent py-20 border-b border-purple-500/20">
      {/* Gradient Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <Link to="/Contact" className="group">
        <div className="relative z-10 w-[70%] md:w-[40%] m-auto mb-8 text-center space-y-2">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
            Contact Me
          </h1>
          <p className="text-gray-400 text-lg group-hover:text-purple-400 transition-colors">Ready to work together?</p>
        </div>

        <div className="relative z-10 m-auto lg:w-[30%] md:w-[45%] w-[80%] h-auto p-4 rounded-full border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/30">
          {/* Gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>

          <div className="relative flex flex-col justify-center items-center w-full h-auto p-12 md:p-16 rounded-full border-dashed border-2 border-purple-500/50 group-hover:border-purple-400 transition-all duration-500 bg-[#0F0F0F]/30 backdrop-blur-sm">
            <p className="w-full text-base md:text-lg text-gray-300 mb-2 group-hover:text-white transition-colors">
              Desire for a project that Rocks?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
              Contact Mohamed
            </h2>
            <ViewMoreIcon className='text-[50px] md:text-[60px] text-purple-400 group-hover:text-purple-300 group-hover:animate-bounce transition-colors duration-500' />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContactHome;
