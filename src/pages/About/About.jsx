import Icons from "../Home/Icons";
import Navbar from "../navbar/navbar";
import MohamedPicture from "../../assets/ME.png"
import Footer from "../footer/footer";
import FrontEndIcon from "../icons/FrontEndIcon";
import { useNavigate } from "react-router-dom";
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
            <div className="lg:w-[40%] w-[70%] gap-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-[40px]">Mohamed Ncib</h2>
                <p>Hello world , Im Mohamed Ncib computer Science Student , Web developer and art Lover</p>
                <Icons />
            </div>
            <div className="lg:w-[20%] w-[35%] float-right">
                <img src={MohamedPicture} alt="Moahamed Ncib" className="float-right w-full rounded-full" />
            </div>
        </div>
        
      <button className="flex flex-row justify-center items-center text-center m-auto lg:w-[30%] w-[50%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#7658eb] hover:text-[#0F0F0F] transition-all duration-500"
        onClick={()=>{
          Navigate('/Portfolio/Works')
        }}
      >
        <p className="text-center p-2">Check Projects</p>
        <FrontEndIcon className="text-[30px]" />
      </button>
      </div>
       <Footer />
    </div>
  );
};

export default About;
