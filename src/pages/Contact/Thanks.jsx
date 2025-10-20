import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ScrollToTop from "../../functions/scrollToTp.js";
import LiquidEther from "../../components/LiquidEther";

const Thanks = () => {
  ScrollToTop();
    return (
      <div className="relative min-h-screen  text-white transition-all duration-500 m-auto">
        <LiquidEther className="fixed inset-0 -z-10" colors={["#0a174e", "#1a237e", "#283593"]} />
      <Navbar/>
      <div id="content" className=" h-screen flex flex-col justify-center items-center transition-all duration-500">
        <div className="group hover:shadow-2xl bg-purple-950/75 rounded-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all  border-purple-500/30 md:h-[50vh] h-[50vh] md:w-[40vw] w-[80vw] flex flex-col m-auto duration-500 p-6 backdrop-blur-2xl shadow-lg shadow-purple-500/20">
        <h1 className=" md:text-auto text-[200%] m-auto border-b border-purple-300/50 transition-all duration-500 pb-4">Thank you , Your Message Has Been Sent.</h1>
        <p className=" md:text-auto text-[100%] m-auto text-center">ill Look it Right Away And Have An Answer For You As Soon As Possible</p>
      </div>
      </div>
       <Footer />
      </div>
     );
}

export default Thanks;
