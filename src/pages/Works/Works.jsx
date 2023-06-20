import Navbar from "../navbar/navbar";
import FirstProjectImage from '../../assets/Stroy-Time.png'
import secondProject from "../../assets/IEEE-SIGHT.png"
import thirdProject from "../../assets/weather-app.png"
import forthProject from "../../assets/pass-generator.png"
import fifthProject from "../../assets/RPS.png"
import sixthProject from "../../assets/quote-generator.png"
import GithubIcon from "../icons/githubIcon.jsx";
import { useNavigate } from "react-router-dom";
import FrontEndIcon from "../icons/FrontEndIcon.jsx"
import Footer from "../footer/footer";
const Works = () => {
  const Navigate = useNavigate();
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
        className=" md:grid md:gap-8 md:grid-cols-2 space-y-3 m-auto grid-rows-1 transition-all duration-500"
      >
        <div
          id="project"
          className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
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
            <img
              src={FirstProjectImage}
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
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
            <img
              src={secondProject}
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] transition-all duration-500"
        >
          <div className="flex flex-row justify-around items-center w-[100%]">
            <p className="text-[20px]">Weather APP</p>
            <div className="bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]">
              <a
                href="/"
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
            <img
              src={thirdProject}
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
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
            <img
              src={forthProject}
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
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
            <img
              src={fifthProject }
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>

        <div
          id="project"
          className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500"
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
            <img
              src={sixthProject}
              alt="Project-Photo"
              className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto"
            />
          </div>
        </div>
      </div>

      <button
        className="flex flex-row justify-center items-center text-center m-auto lg:w-[30%] w-[50%] p-2 rounded-xl font-semibold bg-[#6947ef] text-white hover:bg-[#7658eb] hover:text-[#0F0F0F] transition-all duration-500"
        onClick={() => {
          Navigate("/Contact");
        }}
      >
        <p className="text-center p-2">Hire Me</p>
        <FrontEndIcon className="text-[30px]" />
        {/* change the buttons Icon */}
      </button>
      <Footer />
      </div>
    </div>
  );
};

export default Works;
