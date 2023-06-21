import Icons from "../Home/Icons";
import Navbar from "../navbar/navbar";
import MohamedPicture from "../../assets/ME.png"
import Footer from "../footer/footer";
import FrontEndIcon from "../icons/FrontEndIcon";
import DownloadIcon from "../icons/download.jsx"
import { useNavigate } from "react-router-dom";
import Resume from '../../assets/PDF/Resume 2022-2023.pdf'
const About = () => {
  const Navigate = useNavigate();

  return (
    <div className="bg-[#0F0F0F]  text-white">
      <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto  lg:w-[22%] transition-all duration-500">
        <p></p>
      </div>
      <Navbar />
      <div id="content" className=" h-screen flex flex-col">
        <div className="flex lg:flex-row justify-around items-center flex-col-reverse">
            <div className="lg:w-[40%] w-[70%] gap-8 flex flex-col justify-center items-center text-center">
                <h2 className="text-[40px] tracking-wider">Mohamed Ncib</h2>
                <p className="tracking-wider text-[16px]">Hello world , Im a computer Science Student , web developer and designer with a passion for creating functional and user-friendly websites.</p>
               <a
                href={Resume}
                download="Mohamed-Ncib-Resume-2022-2023"
                rel="noopener noreferrer"
                className="flex flex-row justify-center items-center text-center m-auto lg:w-[40%] w-[50%] p-4 rounded-xl font-semibold bg-[#6947ef] text-white hover:bg-[#6947ef] hover:text-[#0F0F0F] transition-all duration-500"
               > <button id="downloadResume" value="download">Get My Resume</button>
               <DownloadIcon className="text-[25px]" />
               </a>
                <Icons />
            </div>
            <div className="lg:w-[20%] w-[30%] float-right bg-transparent">
                <img src={MohamedPicture} alt="Moahamed Ncib" className="float-right w-full rounded-full shadow-xl shadow-[#7c7c7c6c]" />
            </div>
        </div>
        
      <button className="flex flex-row justify-center items-center text-center m-auto lg:w-[30%] w-[50%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#6947ef] font-medium hover:text-[#0F0F0F] transition-all duration-500"
        onClick={()=>{
          Navigate('/Mohamed-Ncib/Works')
        }}
      >
        <p className="text-center p-2 font-semibold">Check Projects</p>
        <FrontEndIcon className="text-[30px]" />
      </button>
      </div>
       <Footer />
    </div>
  );
};

export default About;
