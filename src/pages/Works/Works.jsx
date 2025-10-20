import Navbar from "../navbar/navbar";
import FirstProjectImage from "../../assets/Stroy-Time.png";
import secondProject from "../../assets/IEEE-SIGHT.png";
import thirdProject from "../../assets/weather-app.png";
import forthProject from "../../assets/pass-generator.png";
import fifthProject from "../../assets/RPS.png";
import sixthProject from "../../assets/quote-generator.png";
import findus from "../../assets/FindUs-Game.png";
import dashboard from "../../assets/AdminDhasboard.png";
import GithubIcon from "../icons/githubIcon.jsx";
import FrontEndIcon from "../icons/FrontEndIcon.jsx";
import icloud from "../../assets/icloud-login-clone.png";
import nuisible from "../../assets/nuisible-expert.png";
import Wordpress from "../icons/wordpress.jsx";
import Footer from "../footer/footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../functions/scrollToTp";
import GiClick from "../icons/clickIcon.jsx";
import { useState } from "react";
import wehiveonImage from "../../assets/wehiveon.png";
import telemexProject from "../../assets/telemexScreenshot.png";
import StarInfoImage from "../../assets/startinfo.png";

const Works = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  ScrollToTop();

  return (
    <div className="bg-transparent text-white h-full min-h-screen">
      <Navbar />

      {/* Gradient Orbs */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[30%] left-[10%] w-[350px] h-[350px] bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <div className="relative z-10 space-y-14 pb-16">
        <div className="p-6 mt-4">
          <h2 className="text-[40px] md:text-[50px] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent inline-block">
            Recent Projects
          </h2>
          <p className="text-gray-400 mt-2 text-lg">Explore my latest work and creations</p>
        </div>
        <div
          id="Projects"
          className=" md:grid md:gap-8 md:grid-cols-2 space-y-7 m-auto grid-rows-2 p-2s transition-all duration-500"
        >
           {/*StarInfo */}
     <div id='project' className="group relative flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-2xl m-auto border border-purple-500/30 p-4 transition-all duration-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 bg-[#0F0F0F]/50 backdrop-blur-sm hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          <div className='relative z-10 flex flex-row justify-around items-center w-full'>
            <p className='text-[22px] font-bold text-purple-400'>StarInfo</p>
  
     
            <div className='bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg text-white w-[45%] p-2 text-center font-semibold  transition-all duration-500'>
              <span>Project</span>
            </div>
                   <a
              href="https://github.com/Mohamed-ncib19/startinfo-4.0"
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full  text-white p-3 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500"
            >
              <GithubIcon />
            </a>
          </div>
          <div className='relative z-10 w-[100%] m-auto rounded-xl overflow-hidden'>
          <LazyLoadImage src={StarInfoImage} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-purple-500/30 rounded-xl m-auto transition-all duration-500 group-hover:border-purple-500/60" />
        </div>
        </div>
          {/*WeHiveOn */}
          <div
            id="project"
            className="group relative flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-2xl m-auto border border-purple-500/30 p-4 transition-all duration-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 bg-[#0F0F0F]/50 backdrop-blur-sm hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex flex-row justify-around items-center w-full">
              <p className="text-[22px] font-bold text-purple-400">WeHiveOn</p>
                <a
                  href="https://docs.google.com/document/d/1LNws-P7DLEPt-C4jh0FD4b3bWvWtmE6tf-ZqhfBeK1s/edit?usp=sharing"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white m-auto lg:w-[50%] w-[60%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500 hover:scale-105"
                >
                  Description Doc
                </a>
              <a
                href="https://github.com/Mohamed-ncib19/Project-monitoring-platform"
                className="bg-[#484848] p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="relative z-10 w-[100%] m-auto rounded-xl overflow-hidden">
              <LazyLoadImage
                src={wehiveonImage}
                effect="blur"
                alt="Project-Photo"
                className="md:w-[90%] w-[100%] border border-purple-500/30 rounded-xl m-auto transition-all duration-500 group-hover:border-purple-500/60"
              />
              {showVideo && (
                <div className="fixed inset-0 ">
                  <video controls className="absolute inset-0">
                    <source
                      src="https://dl.dropboxusercontent.com/scl/fi/wtqdgx5tixen0m080wx01/wehiveonDemonstration.mp4?rlkey=7u5bp4bt3j2tbivf0zlghuddl"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              {!showVideo && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 cursor-pointer"
                  onClick={handleClick}
                >
                  <i>
                    <GiClick />
                  </i>
                  <p className="text-white font-bold text-center cursor-pointer">
                    Click here to show video
                  </p>
                </div>
              )}
            </div>
            {isHovered && !showVideo && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/95 to-transparent text-white p-4 rounded-b-2xl transition-all duration-500 z-10">
                <p className="text-center font-semibold text-gray-300">
                  This project is still in progress. Please explore the
                  description document, video demonstration, and design for a
                  comprehensive understanding.
                </p>
              </div>
            )}
            {showVideo && (
              <button
                className="relative z-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-10 py-2 rounded-lg shadow-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => setShowVideo(!showVideo)}
              >
                Close
              </button>
            )}
          </div>

          {/*Telemex */}
          <div
            id="project"
            className="group relative flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-2xl m-auto border border-purple-500/30 p-4 transition-all duration-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 bg-[#0F0F0F]/50 backdrop-blur-sm hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex flex-row justify-around items-center w-full">
              <p className="text-[22px] font-bold text-purple-400">Telemex</p>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500">
                <span>Freelance project</span>
              </div>
            </div>
            <div className="relative z-10 w-[100%] m-auto rounded-xl overflow-hidden">
              <LazyLoadImage
                src={telemexProject}
                effect="blur"
                alt="Project-Photo"
                className="md:w-[90%] w-[100%] border border-purple-500/30 rounded-xl m-auto transition-all duration-500 group-hover:border-purple-500/60"
              />
            </div>
          </div>

          {/* StoryTime */}
          <div
            id="project"
            className="group relative flex flex-col items-center gap-4 w-[90%] md:w-[60%] md:h-auto h-auto rounded-2xl m-auto border border-purple-500/30 p-4 transition-all duration-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 bg-[#0F0F0F]/50 backdrop-blur-sm hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex flex-row justify-around items-center w-[100%]">
              <p className="text-[22px] font-bold text-purple-400">StoryTime</p>
                <a
                  href="https://mohamed-ncib19.github.io/Story-Time/"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white m-auto lg:w-[50%] w-[60%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500 hover:scale-105"
                >
                  Live Preview
                </a>
              <a
                href="https://github.com/Mohamed-ncib19/Story-Time"
                className="bg-[#484848] p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="relative z-10 w-[100%] m-auto rounded-xl overflow-hidden">
              <LazyLoadImage
                src={FirstProjectImage}
                effect="blur"
                alt="Project-Photo"
                className="md:w-[90%] w-[100%] border border-purple-500/30 rounded-xl m-auto transition-all duration-500 group-hover:border-purple-500/60"
              />
            </div>
          </div>

         
        </div>
        
        <Link
          className="group relative flex flex-row justify-center items-center text-center m-auto lg:w-[30%] w-[50%] gap-3 p-4 rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:scale-105 border border-purple-500/50 hover:border-purple-500"
          to="/Contact"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500"></div>
          <p className="relative z-10 text-gray-300 hover:text-white  text-lg tracking-wider">Let’s connect to turn ideas into impactful projects</p>
          <FrontEndIcon className="relative z-10 text-[30px] text-purple-400 group-hover:text-white transition-colors" />
        </Link>
        <Footer />
      </div>
    </div>
  );
};

export default Works;
