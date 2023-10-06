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
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const RecentProjectsHome = () => {
  return (
    <div className='bg-[#0F0F0F]'>
    <div className="bg-[#0F0F0F] text-white gap-5 m-auto bg-fixed bg-cover h-[90%] w-[90%] md:w-[80%] flex flex-col justify-center items-center md:pt-[10%] pt-[10%] border-b transition-all duration-500 space-y-8 pb-20">
      <div className="w-[50%] m-auto md:w-[30%]">
        <h1 className="text-center text-[2rem] transition-all duration-500">
          information Technologies
        </h1>
        <p className="text-end transition-all duration-500">Experiences</p>
      </div>

      

      <div id="Projects" className=" md:grid md:gap-8 md:grid-cols-2 space-y-8 m-auto grid-rows-1 transition-all duration-500">
        <div id='project' className="flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-full'>
            <p className='text-[20px]'>StoryTime</p>
            <div className='bg-[#6947ef] rounded-md text-white w-[45%] p-1 text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="https://mohamed-ncib19.github.io/Story-Time/" className='transition-all duration-500'>Live Preview</a>
            </div>
            <a href="https://github.com/Mohamed-ncib19/Story-Time/tree/master"  className='bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <LazyLoadImage src={FirstProjectImage} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
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

        <div
          id="project"
          className="flex flex-col items-center gap-2 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
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

        <div id='project' className="flex flex-col items-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
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

        <div id='project' className="flex flex-col items-center justify-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
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

        <div id='project' className="flex flex-col items-center justify-center gap-4 w-[90%] md:w-[70%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-[100%]'>
            <p className='text-[20px]'>Password Generator</p>
            <div className='bg-[#6947ef] rounded-md text-white m-auto lg:w-[50%] w-[60%] p-1 text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="https://mohamed-ncib19.github.io/Password-generator/" className='transition-all duration-500 cursor-pointer'>Live Preview</a>
            </div>
            <a href='https://github.com/Mohamed-ncib19/Password-generator' className='bg-[#484848] p-2 rounded-full hover:bg-[#7355eb] hover:text-[#ffffff] transition-all duration-300'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <LazyLoadImage src={passwordGenerator} effect='blur' alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>


      </div>
    <Link to="/Works" className='flex flex-row justify-center items-center text-center m-auto md:w-[20%] w-[50%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#7658eb] hover:text-[#0F0F0F] transition-all duration-500'>
        <p>View More</p>
      <ViewMoreIcon className="text-[30px]" />
    </Link>
    </div>
    </div>
  );
};

export default RecentProjectsHome;
