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

    const menuItems = [
        { to: "/About-Me", label: "About", number: "01" },
        { to: "/Works", label: "Works", number: "02" },
        { to: "/Contact", label: "Contact", number: "03" }
    ];

    return (
        visible && (
            <div
                id="slideBarContainer"
                className={`fixed inset-0 bg-[#0F0F0F]/95 backdrop-blur-2xl h-full bg-cover transition-all duration-500 z-50 ${isOpen ? 'slide-in' : 'slide-out'}`}
                onAnimationEnd={handleAnimationEnd}
            >
                {/* Animated gradient orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <nav className="flex justify-between items-start w-full p-6 relative z-10">
                    <Link to="/" onClick={() => setIsOpen(false)} className="group">
                        <h4 className="md:text-[30px] text-white text-[20px] font-bold transition-all duration-500 group-hover:scale-105">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Mohamed
                            </span>
                            <br/>
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                                Ncib
                            </span>
                            <span className="text-purple-400 ml-2">&lt;/&gt;</span>
                        </h4>
                    </Link>
                    <button
                        className="relative transition-all duration-300 hover:bg-purple-500/20 p-3 rounded-full group"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <CloseIcon className="relative text-[30px] text-white" />
                    </button>
                </nav>

                <div className="flex flex-col justify-center items-center gap-8 text-white text-[50px] md:text-[60px] h-[80vh] relative z-10">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsOpen(false)}
                            className="group relative overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-sm md:text-base text-purple-400/50 font-mono group-hover:text-purple-400 transition-all duration-300">
                                    {item.number}
                                </span>
                                <h1 className="relative cursor-pointer font-bold transition-all duration-500 group-hover:translate-x-4">
                                    <span className="relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-purple-600 transition-all duration-500">
                                        {item.label}
                                    </span>
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-500"></div>
                                </h1>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-pink-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                        </Link>
                    ))}
                </div>

                {/* Bottom decoration */}
                <div className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-sm">
                    <p>© 2024 Mohamed Ncib - Web Developer & Designer</p>
                </div>
            </div>
        )
    );
}

export default SlideBar;
