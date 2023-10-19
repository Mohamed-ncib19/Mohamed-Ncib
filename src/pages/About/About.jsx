import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import ScrollToTop from "../../functions/scrollToTp";
import Icons from "../icons/Icons";
import FrontEndIcon from "../icons/FrontEndIcon";
import DownloadIcon from "../icons/download.jsx"
import MohamedPicture from "../../assets/ME.png"
import PlaceHolderImage from "../../assets/ME_LowRes.png"
import Resume from '../../assets/PDF/Resume2023-2024.pdf'

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
                <p className="tracking-wider w-full text-[16px]">Hello world , Im a computer Science Student , Web Designer , Web Developer with a passion for creating functional and user-friendly websites.</p>
               <a
                href={Resume}
                download="Mohamed-Ncib-Resume-2023-2024"
                rel="noopener noreferrer"
                className="flex flex-row justify-center items-center text-center m-auto lg:w-[40%] w-[90%] p-4 rounded-xl font-semibold bg-[#6947ef] text-white hover:bg-[#6947ef] hover:text-[#0F0F0F] transition-all duration-500"
               > <button id="downloadResume" value="download">Get My Resume</button>
               <DownloadIcon className="text-[25px]" />
               </a>
                <Icons />
            </div>
            <div className="lg:w-[20%] w-[50%] float-right bg-transparent">
                <LazyLoadImage src={MohamedPicture} effect="blur"  placeholderSrc={PlaceHolderImage} alt="Moahamed Ncib" className="float-right w-full rounded-full shadow-xl shadow-[#7c7c7c6c]" />
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
