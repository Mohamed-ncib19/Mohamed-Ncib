import GithubIcon from '../icons/githubIcon.jsx'
import ViewMoreIcon from '../icons/viewMore.jsx'
import FirstProjectImage from '../../assets/Stroy-Time.png'
import secondProject from "../../assets/IEEE-SIGHT.png"
import thirdProject from "../../assets/weather-app.png"
import forthProject from "../../assets/pass-generator.png"
const RecentProjectsHome = () => {
  return (
    <div className='bg-[#0F0F0F]'>
    <div className="bg-[#0F0F0F] text-white gap-5 m-auto bg-fixed bg-cover h-[90%] w-[90%] md:w-[80%] flex flex-col justify-center items-center md:pt-[10%] pt-[10%] border-b S transition-all duration-500 space-y-8 pb-20">
      <div className="w-[50%] m-auto md:w-[30%]">
        <h1 className="text-center text-[2rem] transition-all duration-500">
          information Technologies
        </h1>
        <p className="text-end transition-all duration-500">Experiences</p>
      </div>

      <div id="Projects" className=" md:grid md:gap-8 md:grid-cols-2 space-y-8 m-auto grid-rows-1 transition-all duration-500">
        <div id='project' className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-[100%]'>
            <p className='text-[20px]'>StoryTime</p>
            <div className='bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="https://mohamed-ncib19.github.io/Story-Time/" className='transition-all duration-500'>Live Preview</a>
            </div>
            <a href="https://github.com/Mohamed-ncib19/Story-Time/tree/master"  className='bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <img src={FirstProjectImage} alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>

        <div id='project' className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-[100%]'>
            <p className='text-[18px]'>IEEE SIGHT ESSTHS</p>
            <div className='bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="https://mohamed-ncib19.github.io/IEEE-SIGHT-ESSTHS/" className='transition-all duration-500 cursor-pointer'>Live Preview</a>
            </div>
            <a href="https://github.com/Mohamed-ncib19/IEEE-SIGHT-ESSTHS" className='bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <img src={secondProject} alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>

        <div id='project' className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-[100%]'>
            <p className='text-[20px]'>Weather APP</p>
            <div className='bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="/" className='transition-all duration-500 cursor-pointer'>Live Preview</a>
            </div>
            <a href="https://github.com/Mohamed-ncib19/Weather-APP" className='bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <img src={thirdProject} alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>

        <div id='project' className="flex flex-col items-center w-[70%] md:w-[60%] md:h-auto h-auto rounded-xl m-auto border border-[#6947ef] p-2 transition-all duration-500">
          <div className='flex flex-row justify-around items-center w-[100%]'>
            <p className='text-[20px]'>Password Generator</p>
            <div className='bg-[#6947ef] rounded-md text-white w-[30%] text-center hover:bg-[#7355eb] hover:text-[#0F0F0F]'>
              <a href="https://mohamed-ncib19.github.io/Password-generator/" className='transition-all duration-500 cursor-pointer'>Live Preview</a>
            </div>
            <a href="https://github.com/Mohamed-ncib19/Password-generator" className='bg-[#484848] p-2 rounded-full hover:bg-[#6947ef] hover:text-[#ffffff] transition-all duration-300'><GithubIcon /></a>
          </div>
          <div className='w-[100%] m-auto'>
          <img src={forthProject} alt="Project-Photo" className="md:w-[90%] w-[100%] border border-[#6947ef] rounded-xl m-auto" />
        </div>
        </div>


      </div>
    <div className='flex flex-row justify-center items-center text-center m-auto md:w-[20%] w-[30%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#7658eb] hover:text-[#0F0F0F] transition-all duration-500'>
      <a href="/Works" className='w-[100%]'>View More</a>
      <ViewMoreIcon className="text-[30px]" />
    </div>
    </div>
    </div>
  );
};

export default RecentProjectsHome;
