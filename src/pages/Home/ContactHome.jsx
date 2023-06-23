import { Link } from "react-router-dom";
import ViewMoreIcon from "../icons/viewMore";
const ContactHome = () => {
  return (
    <div className="text-white bg-[#0F0F0F] pb-[15%]">
      <Link to="/Contact">
      <div className="w-[50%] m-auto md:w-[30%] p-8">
        <h1 className="text-center text-[2rem] transition-all duration-500 ">
          Contact Me
        </h1>
        <p className="text-end transition-all duration-500">Hire Me</p>
      </div>

      <div className="m-auto lg:w-[25%] w-[75%] h-auto p-3 rounded-full border-[3px] border-solid border-spacing-3 hover:border-[#6947ef] contactButton transition-all duration-500">
            <div className="flex flex-col justify-center items-center w-full lg:h-auto h-auto p-16 rounded-full border-dashed border-[2px] border-[#6947ef] border-spacing-8 hover:border-white circleInside transition-all duration-500">
                <p className="w-full lg:text-[20px] text-[15px] float-left transition-all duration-500">desire for a project that Rocks?</p>
                <h1 className="lg:text-[35px] text-[30px] hoverring transition-all duration-500">Contact Mohamed</h1>
                <ViewMoreIcon className='text-[60px] text-[#6947ef] hoverringIcon transition-all duration-500' />
            </div>
      </div>
      </Link>
    </div>
  );
};

export default ContactHome;
