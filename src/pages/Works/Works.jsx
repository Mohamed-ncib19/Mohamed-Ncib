import Navbar from "../navbar/navbar";
import FirstProjectImage from '../../assets/Stroy-Time.png'
import secondProject from "../../assets/IEEE-SIGHT.png"
import thirdProject from "../../assets/weather-app.png"
import forthProject from "../../assets/pass-generator.png"
import fifthProject from "../../assets/RPS.png"
import sixthProject from "../../assets/quote-generator.png"
import findus from "../../assets/FindUs-Game.png"
import dashboard from "../../assets/AdminDhasboard.png"
import GithubIcon from "../icons/githubIcon.jsx";
import FrontEndIcon from "../icons/FrontEndIcon.jsx"
import icloud from "../../assets/icloud-login-clone.png"
import nuisible from "../../assets/nuisible-expert.png"
import Wordpress from "../icons/wordpress.jsx"
import Footer from "../footer/footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";
import ScrollToTop from "../../functions/scrollToTp";
import GiClick from '../icons/clickIcon.jsx'
import { useState } from "react";
import wehiveonImage from '../../assets/wehiveon.png';
import telemexProject from '../../assets/telemexScreenshot.png';

const Works = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  ScrollToTop();
 
  return (
    <div className="bg-[#0F0F0F]  text-white h-full">
      <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto  lg:w-[22%] transition-all duration-500">
        <p></p>
      </div>
      <Navbar />
<div className="space-y-14">
    <h2 className="text-[35px] p-6 underline">Recent Projects</h2>
      <div
        id="Projects"
        className=" md:grid md:gap-8 md:grid-cols-2 space-y-7 m-auto grid-rows-2 p-2s transition-all duration-500"
      >
                {/*WeHiveOn */}
                <div
      id="project"
      className="relative flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row justify-around items-center w-full">
        <p className="text-[20px]">WeHiveOn</p>
        <div className="bg-[#6947ef] rounded-md text-white w-[45%] p-1 text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
          <a href="https://docs.google.com/document/d/1LNws-P7DLEPt-C4jh0FD4b3bWvWtmE6tf-ZqhfBeK1s/edit?usp=sharing" className="transition-all duration-500">
            Description Doc
          </a>
        </div>
        <a
          href="https://github.com/Mohamed-ncib19/Project-monitoring-platform"
          className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
        >
          <GithubIcon />
        </a>
      </div>
      <div className="relative w-[100%] m-auto bg-opacity-30 backdrop-filter backdrop-blur-md">
        <LazyLoadImage
          src={wehiveonImage}
          effect="blur"
          alt="Project-Photo"
          className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
        />
        {showVideo && (
          <div className="fixed inset-0 ">
<video controls className='absolute inset-0'>
              <source src='https://dl.dropboxusercontent.com/scl/fi/wtqdgx5tixen0m080wx01/wehiveonDemonstration.mp4?rlkey=7u5bp4bt3j2tbivf0zlghuddl' type='video/mp4' />
              Your browser does not support the video tag.
          </video>
                    </div>
        )}
        {!showVideo && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 cursor-pointer" onClick={handleClick}>
            <i>
              <GiClick />
            </i>
              <p className="text-white font-bold text-center cursor-pointer" >
                Click here to show video
              </p>
            </div>
        )}
      </div>
      {isHovered && !showVideo && (
        <div className="absolute bottom-0 left-0 right-0 bg-[#0F0F0F] bg-opacity-75 text-white p-4 rounded-b-xl transition-all duration-500 z-10">
          <p className="text-center font-semibold">This project is still in progress. Please explore the description document, video demonstration, and design for a comprehensive understanding.</p>
        </div>
      )}
    {
      showVideo && (
        <button className='bg-red-800 hover:bg-opacity-60 px-10 py-2 rounded-md shadow' onClick={()=> setShowVideo(!showVideo) } >Close</button>
      )
    }
    </div>

        {/*Telemex */}
        <div id='project' className="flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-full'>
            <p className='text-[20px]'>Telemex</p>
            <div className='bg-[#6947ef] rounded-md text-white w-[45%] p-1 text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <span className='transition-all duration-500 font-bold'>Freelance project</span>
            </div>
          </div>
          <div className='w-[100%] m-auto'>
          <LazyLoadImage src={telemexProject} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">StoryTime</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://mohamed-ncib19.github.io/Story-Time/"
                className="transition-all duration-500"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://github.com/Mohamed-ncib19/Story-Time"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={FirstProjectImage}
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">Find Us</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://find-us.onrender.com/"
                className="transition-all duration-500"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://github.com/Mohamed-ncib19/Find-Us"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={findus}
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div id='project' className="flex flex-col items-center gap-4 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-[100%]'>
            <p className='text-[20px]'>Icloud-login-clone</p>
            <div className='bg-[#6947ef] rounded-md text-white m-auto lg:w-[50%] w-[60%] p-1 text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="https://mohamed-ncib19.github.io/Icloud-login-clone/" className='transition-all duration-500 cursor-pointer'>Live Preview</a>
            </div>
            <a href="https://github.com/Mohamed-ncib19/Icloud-login-clone" className='bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <LazyLoadImage src={icloud} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>

        <div id='project' className="flex flex-col items-center justify-center gap-4 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-[100%]'>
            <p className='text-[20px]'>nuisible expert</p>
            <div className='bg-[#6947ef] rounded-md text-white m-auto lg:w-[50%] w-[60%] p-1 text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="https://nuisiblexpert.fr/fr/" className='transition-all duration-500 cursor-pointer'>Live Preview</a>
            </div>
            <a  className='bg-[#484848] p-2 rounded-full hover:bg-[#beb0a4] hover:text-[#ffffff] transition-all duration-300'><Wordpress /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <LazyLoadImage src={nuisible} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">Admin Dashboard</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://simple-admin-dashboard.onrender.com/"
                className="transition-all duration-500"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://github.com/Mohamed-ncib19/Admin-Dashboard"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={dashboard}
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>



        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">IEEE SIGHT ESSTHS</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://mohamed-ncib19.github.io/IEEE-SIGHT-ESSTHS/"
                className="transition-all duration-500 cursor-pointer"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://github.com/Mohamed-ncib19/IEEE-SIGHT-ESSTHS"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={secondProject}
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">Weather APP</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://weather-wbb8.onrender.com"
                className="transition-all duration-500 cursor-pointer"
              >
                Live Preview
              </a>
            </div>
            <a
              href="/https://github.com/Mohamed-ncib19/Weather-APP"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={thirdProject}
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">Password Generator</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://mohamed-ncib19.github.io/Password-generator/"
                className="transition-all duration-500 cursor-pointer"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://github.com/Mohamed-ncib19/Password-generator"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={forthProject}
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">Rock Paper Scissors</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://mohamed-ncib19.github.io/rock-paper-scissors/"
                className="transition-all duration-500 cursor-pointer"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://github.com/Mohamed-ncib19/rock-paper-scissors"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={fifthProject }
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">Random Quote Generator</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="https://mohamed-ncib19.github.io/Random-Quotes-Generator/"
                className="transition-all duration-500 cursor-pointer"
              >
                Live Preview
              </a>
            </div>
            <a
              href="https://github.com/Mohamed-ncib19/Random-Quotes-Generator"
              className="bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="w-[100%] m-auto">
            <LazyLoadImage
              src={sixthProject}
              effect='blur'
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>
      </div>

      <Link
        className="flex flex-row justify-center items-center text-center m-auto lg:w-[30%] w-[50%] p-2 rounded-xl font-semibold bg-[#6947ef] text-white hover:bg-[#7658eb] hover:text-[#0F0F0F] transition-all duration-500"
        to="/Contact"
      >
        <p className="text-center p-2">Hire Me</p>
        <FrontEndIcon className="text-[30px]" />
      </Link>
      <Footer />
      </div>
    </div>
  );
};

export default Works;
