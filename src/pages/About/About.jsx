import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import ScrollToTop from "../../functions/scrollToTp";
import Icons from "../icons/Icons";
import FrontEndIcon from "../icons/FrontEndIcon";
import MohamedPicture from "../../assets/ME.png"
import CVEnglish from "../../assets/PDF/Mohamed_Ncib_CV_English_Version.pdf"
import DownloadIcon from "../icons/download";

const About = () => {

  ScrollToTop();
  return (
    <div className="bg-[#0F0F0F] h-full text-white">
      <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto  lg:w-[22%] transition-all duration-500">
        <p></p>
      </div>
      <Navbar />
      <div id="content" className=" h-full flex flex-col flex-wrap gap-4 p-4 ">
        <div className="flex lg:flex-row justify-around items-center flex-col-reverse">
            <div className="lg:w-[40%] w-[70%] gap-8 flex flex-col justify-center items-center text-center">
                <h2 className="text-[40px] tracking-wider">Mohamed Ncib</h2>
                <p className="tracking-wider w-full text-[16px]">Hello world, I`m Mohamed Ncib, a freshly graduated Computer Science student with experience in web development and web design. I`m passionate about creating functional and user-friendly websites.</p>
                  <a
                    href={CVEnglish}
                    className="flex flex-row justify-center items-center text-center m-auto lg:w-[30%] gap-2 w-[90%] p-2 rounded-md font-bold bg-[#6947ef] text-white hover:bg-[#6947ef] hover:text-[#0F0F0F] transition-all duration-500"
                    download="Mohamed_Ncib_Resume_English"
                    target="_blank"
                    rel="noreferrer"
                    >Get my Resume
                    <DownloadIcon className="text-[1.5rem]" />

                    </a>
                <Icons />
            </div>
            <div className="lg:w-[20%]  float-right rounded-md shadow-[#7c7c7c6c]">
                <LazyLoadImage src={MohamedPicture} effect="blur" alt="Moahamed Ncib" />
            </div>
        </div>
        
      <Link to="/Works" className="flex flex-row justify-center items-center text-center m-auto lg:w-[30%] w-[90%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#6947ef] font-medium hover:text-[#0F0F0F] transition-all duration-500"
       
      >
        <p className="text-center p-1 font-semibold">Check Projects</p>
        <FrontEndIcon className="text-[30px]" />
      </Link>
      </div>
       <Footer />
    </div>
  );
};

export default About;
