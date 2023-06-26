import { useNavigate  } from "react-router-dom";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import ViewMoreIcon from "../icons/viewMore";
const ErrorPage = () => {
    const Navigate = useNavigate();
    return ( 
        <div className="bg-[#0F0F0F] text-white">
        <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto  lg:w-[22%] transition-all duration-500">
          <p></p>
        </div>
        <Navbar />
        <div id="content" className="flex flex-col justify-center h-screen items-center text-center m-auto -mt-20">
            <div className="flex flex-col gap-1 justify-center items-center m-auto">
                <h1 className="md:text-[7rem] text-[3rem]">404</h1>
                <h1 className=" md:text-[5rem] text-[2rem]">Page Not Found</h1>
                <p>The Page You Are Looking for is doesnt exist</p>
            </div>
            <button
            className="flex flex-row justify-center items-center text-center m-auto -mt-16 lg:w-[20%] w-[50%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#6947ef] font-medium hover:text-[#0F0F0F] transition-all duration-500"
            onClick={()=>{
                Navigate('/');
            }}
            >Explore Home
            <ViewMoreIcon />    
            </button>
            
        </div>
        <Footer />
        </div>
     );
}
 
export default ErrorPage;