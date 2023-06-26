import Design from "../icons/design";
import ListeArrow from "../icons/doubleArrowListe";
import Coding from "../icons/FrontEndIcon.jsx";
import BackEndIcon from "../icons/BackEndIcon.jsx";
import '../../css/style.css'
const Skills = () => {
  return (
    <div className="bg-[#0F0F0F]  w-full" id="Skills">
    <div className="text-white w-[90%] md:w-[80%] m-auto p-7 bg-[#0F0F0F] pt-[4%] transition-all duration-500 border-b space-y-8 pb-20" >
      <div className="w-[50%]  m-auto md:w-[30%] ">
      <h1 className="text-center text-[2rem] transition-all duration-500">information Technologies</h1>
      <p className="text-end transition-all duration-500">Experiences</p>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-center float-none  pt-[4%] space-x-0 md:space-x-5 items-center m-auto space-y-4 md:space-y-0 transition-all duration-500  ">
 
        <div id="Design" className="bg-[#181818]  rounded-3xl w-[90%] h-[60vh] flex flex-col gap-8  p-[20px] lg:w-[30%] transition-all duration-500 shadow-md hover:shadow-[#6947ef] hoverAnimationDesign backdrop-blur-3xl">
          <Design className='text-[60px] transition-all duration-500 designIcon text-[#6947ef]' />
          <h2 className="text-[30px]  designText transition-all duration-500  ">Design</h2>
          <div className="flex flex-col justify-center designText items-start space-y-5 transition-all duration-500 ">
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>Figma</p>
            </div>
            <div className="flex flex-row items-center">
              <ListeArrow />
              <p>Canva</p>
            </div>
          </div>
        </div>

        <div id="Front-End" className="bg-[#181818] rounded-3xl w-[90%] h-[60vh] flex flex-col justify-start items-start  gap-8 md:gap-8  p-[20px] lg:w-[30%] transition-all duration-500 shadow-md hover:shadow-[#6947ef] hoverAnimationFront">
          <Coding className='lg:text-[60px] text-[50px] transition-all duration-500 frontIcon text-[#6947ef]' />
          <h2 className="text-[30px] m-0 frontText transition-all duration-500  ">Front End</h2>
          <div className="flex flex-col justify-center frontText items-start md:space-y-1 space-y-3 transition-all duration-500 ">
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>React</p>
            </div>
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>Tailwind</p>
            </div>
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>HTML</p>
            </div>
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>CSS</p>
            </div>
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>JS</p>
            </div>
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>Wordpress</p>
            </div>
           
          </div>
        </div>

        <div id="Back-End" className="bg-[#181818] rounded-3xl w-[90%] h-[60vh]  flex flex-col gap-8  p-[20px] lg:w-[30%] transition-all duration-500 shadow-md hover:shadow-[#6947ef] hoverAnimationBack">
          <BackEndIcon  className='text-[60px] transition-all duration-500 backIcon  text-[#6947ef]'/>
          <h2 className="text-[30px] backText transition-all duration-500 ">Back</h2>
          <div className="flex flex-col justify-center items-start space-y-5 backText transition-all duration-500 ">
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>Sql</p>
            </div>
            <div className="flex flex-row items-center ">
              <ListeArrow />
              <p>FireBase</p>
            </div>
            
          </div>
        </div>

      </div>

    </div>
    
    </div>
  );
};

export default Skills;
