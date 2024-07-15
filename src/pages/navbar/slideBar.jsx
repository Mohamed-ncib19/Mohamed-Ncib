import { Link } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon.jsx";
import { useEffect, useState } from "react";

const SlideBar = ({ isOpen, setIsOpen }) => {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        }
    }, [isOpen]);

    const handleAnimationEnd = () => {
        if (!isOpen) {
            setVisible(false);
        }
    };

    return (
        visible && (
            <div 
                id="slideBarContainer"
                className={`fixed inset-0 bg-[#0F0F0F] h-full bg-cover transition-all duration-500 ${isOpen ? 'slide-in' : 'slide-out'}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto float-right mt-[-8rem] -z-10 lg:w-[22%] transition-all duration-500"></div>
                <nav className="flex justify-between items-start w-full p-4">
                    <Link to="/">
                        <h4 className="md:text-[30px] text-white text-[20px] transition-all duration-500">
                            Mohamed<br/> Ncib <span className="text-[#6947ef]">&lt;/&gt;</span>
                        </h4>
                    </Link>
                    <button className="transition-all duration-300 hover:bg-gray-500 hover:bg-opacity-40 p-2 rounded-full" onClick={() => setIsOpen(false)}>
                        <CloseIcon className="text-[30px] text-white" />
                    </button>
                </nav>
                <div className="flex flex-col justify-center items-center gap-6 text-white text-[40px] mt-[-90px] h-screen">
                    <Link to="/About-Me">
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
        )
    );
}

export default SlideBar;
