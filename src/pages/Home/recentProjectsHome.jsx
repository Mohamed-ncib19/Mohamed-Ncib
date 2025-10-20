import GithubIcon from '../icons/githubIcon.jsx'
import ViewMoreIcon from '../icons/viewMore.jsx'
import Wordpress from "../icons/wordpress.jsx"
import FirstProjectImage from '../../assets/Stroy-Time.png'
import findus from "../../assets/FindUs-Game.png"
import dashboard from "../../assets/AdminDhasboard.png"
import icloud from "../../assets/icloud-login-clone.png"
import nuisible from "../../assets/nuisible-expert.png"
import passwordGenerator from "../../assets/pass-generator.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import wehiveonImage from '../../assets/wehiveon.png';
import StarInfoImage from '../../assets/startinfo.png';


import telemexProject from '../../assets/telemexScreenshot.png';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import GiClick from '../icons/clickIcon.jsx'

const RecentProjectsHome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };


  return (
    <div className='relative bg-transparent border-b border-purple-500/20 py-20'>
      {/* Gradient Orbs */}
      <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[15%] right-[5%] w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

    <div className="relative z-10 bg-transparent text-white gap-8 m-auto bg-fixed bg-cover h-[90%] w-[90%] md:w-[80%] flex flex-col justify-center items-center transition-all duration-500 space-y-12 pb-16">
      <div className="w-full md:w-[50%] m-auto text-center space-y-3">
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Recent Projects
        </h1>
        <p className="text-gray-400 text-lg">Featured Works & Case Studies</p>
      </div>      

      <div id="Projects" className=" md:grid md:gap-8 md:grid-cols-2 space-y-8 m-auto grid-rows-1 transition-all duration-500">
        
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative z-10 flex flex-row justify-around items-center w-full">
        <p className="text-[22px] font-bold text-purple-400">WeHiveOn</p>
          <a href="https://docs.google.com/document/d/1LNws-P7DLEPt-C4jh0FD4b3bWvWtmE6tf-ZqhfBeK1s/edit?usp=sharing" className="transition-all duration-500 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 hover:scale-105">
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/95 to-transparent text-white p-4 rounded-b-2xl transition-all duration-500 z-10">
          <p className="text-center font-semibold text-gray-300">This project is still in progress. Please explore the description document, video demonstration, and design for a comprehensive understanding.</p>
        </div>
      )}
    {
      showVideo && (
        <button className='relative z-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-10 py-2 rounded-lg shadow-lg font-semibold transition-all duration-300 hover:scale-105' onClick={()=> setShowVideo(!showVideo) } >Close</button>
      )
    }
        </div>

        {/*Telemex */}
        <div id='project' className="group relative flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-2xl m-auto border border-purple-500/30 p-4 transition-all duration-500 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 bg-[#0F0F0F]/50 backdrop-blur-sm hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          <div className='relative z-10 flex flex-row justify-around items-center w-full'>
            <p className='text-[22px] font-bold text-purple-400'>Telemex</p>
            <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500'>
              <span>Freelance project</span>
            </div>
          </div>
          <div className='relative z-10 w-[100%] m-auto rounded-xl overflow-hidden'>
          <LazyLoadImage src={telemexProject} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-purple-500/30 rounded-xl m-auto transition-all duration-500 group-hover:border-purple-500/60" />
        </div>
        </div>

        <div id='project' className="flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-full'>
            <p className='text-[20px]'>StoryTime</p>
            
              <a href="https://mohamed-ncib19.github.io/Story-Time/" className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500'>Live Preview</a>
            
            <a href="https://github.com/Mohamed-ncib19/Story-Time/tree/master"  className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-full  text-white p-3 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <LazyLoadImage src={FirstProjectImage} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>



      </div>

    <Link to="/Works" className='flex flex-row justify-center items-center text-center m-auto md:w-[20%] w-[50%] p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500'>
        <p>View More</p>
      <ViewMoreIcon className="text-[30px]" />
    </Link>
    </div>
    </div>
  );
};

export default RecentProjectsHome;
