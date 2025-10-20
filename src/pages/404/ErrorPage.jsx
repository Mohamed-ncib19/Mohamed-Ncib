import { Link  } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import ViewMoreIcon from "../icons/viewMore";
import ScrollToTop from "../../functions/scrollToTp";
import LiquidEther from "../../components/LiquidEther";

const ErrorPage = () => {
    ScrollToTop();
    return (
            <div className="relative min-h-screen bg-[#0a174e] text-white">
                <LiquidEther className="fixed inset-0 -z-10" colors={["#0a174e", "#1a237e", "#283593"]} />
        <Navbar />
        <div id="content" className="flex flex-col justify-center h-screen items-center text-center m-auto -mt-20">
            <div className="flex flex-col gap-1 justify-center items-center m-auto">
                <h1 className="md:text-[7rem] text-[3rem] bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">404</h1>
                <h1 className=" md:text-[5rem] text-[2rem] bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">Page Not Found</h1>
                <p className="text-gray-300">The Page You Are Looking for doesnt exist</p>
            </div>
            <Link
            className="flex flex-row justify-center items-center text-center m-auto -mt-16 lg:w-[20%] w-[50%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#7355eb] font-medium hover:scale-105 transition-all duration-500"
            to="/"
            >Explore Home
            <ViewMoreIcon />
            </Link>

        </div>
        <Footer />
    </div>
     );
}

export default ErrorPage;