import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Bars from "../icons/bars";
import CloseIcon from "../icons/CloseIcon";
import SlideBar from "./slideBar";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navigate = useNavigate();

  return (
<>
<nav className="text-white flex flex-row justify-between mt-[-8rem] items-center p-4">
      <Link to="/">
        <h4 className="md:text-[30px] text-[20px] m-auto transition-all duration-500">
          Mohamed
          <br /> Ncib <span className="text-[#6947ef]">&lt;/&gt;</span>
        </h4>
      </Link>
      <button className="text-[40px]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon className="text-[30px] text-white" /> : <Bars />}
      </button>
    </nav>
    <SlideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
