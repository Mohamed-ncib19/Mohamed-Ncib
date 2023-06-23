import { useState } from "react";
import CloseIcon from "../icons/CloseIcon.jsx"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SlideBar = () => {
    const [isOpen,setIsOpen]=useState(false);
    const Navigate = useNavigate();
    return ( 
        <div className="bg-[#0F0F0F]  bg-fixed h-full md:bg-cover m-auto" >
        <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto float-right mt-[-8rem] -z-10 lg:w-[22%] transition-all duration-500">
          <p></p>
          </div>
          <nav className="flex flex-row  justify-between items-start w-full space-y-2 p-4">
          <a href="/">
                <h4 className="md:text-[30px] text-white text-[20px] m-auto transition-all duration-500">Mohamed<br></br> Ncib <span className="text-[#6947ef]">	&lt;/&gt;</span></h4>
            </a>
            <button
            className="transition-all duration-500"
            onClick={()=>{
                if(!isOpen){
                    setIsOpen(true)
                    Navigate(-1)
                }else{
                    setIsOpen(false)
                }
            }}
            ><CloseIcon className="text-[30px] text-white" /></button>
          </nav>
          <div className=" h-screen flex flex-col justify-center items-center gap-6 text-white text-[40px] -mt-[90px]">
            <Link to="/About-Me" smooth>
            <h1 className="cursor-pointer hover:text-[#6947ef] transition-all duration-500">About</h1>
            </Link>
            <Link to="/Works">
            <h1 className="cursor-pointer hover:text-[#6947ef] transition-all duration-500">Works</h1>

            </Link>
            <Link to="/Contact">
            <h1 className="cursor-pointer hover:text-[#6947ef] transition-all duration-500">Contact</h1>
            </Link>
          </div>
          </div>
          
     );
}
 
export default SlideBar;