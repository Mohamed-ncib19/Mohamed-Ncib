import Design from "../icons/design";
import ListeArrow from "../icons/doubleArrowListe";
import Coding from "../icons/FrontEndIcon.jsx";
import BackEndIcon from "../icons/BackEndIcon.jsx";
import DataBaseIcon from "../icons/DatabaseIcon.jsx";
import '../../css/style.css';

const Skills = () => {
  return (
    <div className="bg-[#0F0F0F] w-full" id="Skills">
      <div className="text-white w-[90%] md:w-[80%] m-auto p-7 bg-[#0F0F0F] pt-[4%] transition-all duration-500 border-b space-y-8 pb-20">
        <div className="w-[50%] m-auto md:w-[30%]">
          <h1 className="text-center text-[2rem] transition-all duration-500">Information Technologies</h1>
          <p className="text-end transition-all duration-500">Experiences</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 pt-[4%] transition-all duration-500">

          {/* Design Section */}
          <div id="Design" className="bg-[#181818] rounded-3xl flex flex-col gap-8 p-[20px] text-[1.2rem] transition-all duration-500 shadow-md hover:shadow-[#6947ef] hoverAnimationDesign backdrop-blur-3xl">
            <Design className='text-[60px] transition-all duration-500 designIcon text-[#6947ef]' />
            <h2 className="text-[30px] designText transition-all duration-500 text-gray-400 font-bold">Design</h2>
            <div className="flex flex-col justify-center designText items-start space-y-5 transition-all duration-500">
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>Figma</p>
              </div>
            </div>
          </div>

          {/* Front-End Section */}
          <div id="Front-End" className="bg-[#181818] rounded-3xl flex flex-col justify-start items-start text-[1.2rem] gap-8 p-[20px] transition-all duration-500 shadow-md hover:shadow-[#6947ef] hoverAnimationFront">
            <Coding className='lg:text-[60px] text-[50px] transition-all duration-500 frontIcon text-[#6947ef]' />
            <h2 className="text-[30px] m-0 frontText transition-all duration-500">Front End</h2>
            <div className="flex flex-col justify-center frontText items-start gap-5 md:space-y-1 space-y-3 transition-all duration-500">
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>NextJS, React</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>Bootstrap, Tailwind</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>MaterialUI, Tabler</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>HTML, CSS, JS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>PHP</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>WordPress</p>
              </div>
            </div>
          </div>

          {/* Back-End Section */}
          <div id="Back-End" className="bg-[#181818] rounded-3xl flex flex-col gap-8 p-[20px] text-[1.2rem] transition-all duration-500 shadow-md hover:shadow-[#6947ef] hoverAnimationBack">
            <BackEndIcon className='text-[60px] transition-all duration-500 backIcon text-[#6947ef]' />
            <h2 className="text-[30px] backText transition-all duration-500">Back End</h2>
            <div className="flex flex-col justify-center items-start space-y-5 backText transition-all duration-500">
             
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>ExpressJS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>Fastify</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>SQL</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ListeArrow />
                <p>Firebase</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
