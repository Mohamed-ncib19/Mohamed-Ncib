import Footer from "../footer/footer";
import BackIcon from "../icons/backIcon";
import Navbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../functions/scrollToTp.js"
const Thanks = () => {
  ScrollToTop();
    const Navigate = useNavigate();
    return ( 
        <div className="bg-[#0F0F0F]  text-white transition-all duration-500 m-auto">
      <div className="bg-[#6947ef] w-[40%] h-[13vh] rounded-full blur-3xl m-auto  lg:w-[22%] transition-all duration-500">
        <p></p>
      </div>
      <Navbar/>
      <div id="content" className=" h-screen flex flex-col justify-center items-center transition-all duration-500">
        <button onClick={()=>Navigate(-1)} className="text-[40px] hover:bg-slate-500 hover:text-[#252525] rounded-full p-3"> <BackIcon /> </button>
        <div className="bg-[#6947ef] md:h-[50vh] h-[50vh] md:w-[40vw] w-[80vw] flex flex-col   m-auto  transition-all duration-500 p-6">
        <h1 className=" md:text-auto text-[200%] m-auto  border-b transition-all duration-500">Thank you , Your Message Has Been Sent.</h1>
        <p className=" md:text-auto text-[100%] m-auto">ill Look it Right Away And Have An Answer For You As Soon As Possible</p>
      </div>
      </div>
       <Footer />
    </div>
     );
}
 
export default Thanks;
