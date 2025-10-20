import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import telemex from "../../assets/Telemex.png"
import portfolioUI from "../../assets/portfolioUI.png"
import AminDashboardUI from "../../assets/AminDashboardUI.png"
import FigmaIcon from "../icons/figmaIcon"
import wehiveonFigma from '../../assets/wehiveonFigma.png';

const DesignUI = () => {


    return (
        <div className='relative m-auto bg-transparent py-16 px-6 border-b border-purple-500/20'>
            {/* Gradient Orbs */}
            <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[5%] w-[250px] h-[250px] bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

            <div className="relative z-10 text-center space-y-4 mb-12">
                <h1 className='text-white text-[2.5rem] md:text-[3rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                    UI Design
                </h1>
                <p className="text-gray-400 text-lg">Explore my design portfolio on Figma</p>
            </div>

            <Slide>
                <div className="w-[90%] md:w-[80%] m-auto each-slide-effect h-[50vh] md:h-[60vh]">
                    <div className='h-full flex flex-col bg-contain bg-no-repeat bg-center rounded-2xl' style={{ 'backgroundImage': `url(${wehiveonFigma})` }}>
                        <div className='group relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 shadow-lg w-auto m-auto flex justify-center items-center rounded-full p-4 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500'>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <a className='relative z-10 text-white m-auto text-[2rem] group-hover:scale-110 transition-transform duration-300' target='_blank' rel='noreferrer' href="https://www.figma.com/design/4WGMbbBXOAf5XFY9e02bAd/WeHiveOn?node-id=0-1&t=sbosQ8H8N2EkKtMC-1">
                                <FigmaIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] m-auto each-slide-effect h-[50vh] md:h-[60vh]">
                    <div className='h-full flex flex-col bg-contain bg-no-repeat bg-center rounded-2xl' style={{ 'backgroundImage': `url(${telemex})` }}>
                        <div className='group relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 shadow-lg w-auto m-auto flex justify-center items-center rounded-full p-4 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500'>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <a className='relative z-10 text-white m-auto text-[2rem] group-hover:scale-110 transition-transform duration-300' target='_blank' rel='noreferrer' href="https://www.figma.com/file/gwtMKM1Id5w0YVxjLKVW9P/TELEMEX-RESPONSIVE-DESIGN?type=design&node-id=0%3A1&mode=design&t=rNXsLd8G3nWUgegi-1">
                                <FigmaIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] m-auto each-slide-effect h-[50vh] md:h-[60vh]">
                    <div className='h-full flex flex-col bg-contain bg-no-repeat bg-center rounded-2xl' style={{ 'backgroundImage': `url(${portfolioUI})` }}>
                        <div className='group relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 shadow-lg w-auto m-auto flex justify-center items-center rounded-full p-4 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500'>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <a className='relative z-10 text-white m-auto text-[2rem] group-hover:scale-110 transition-transform duration-300' target='_blank' rel='noreferrer' href="https://www.figma.com/file/MiMsLCtAMc4okb9ckwExPT/Portfolio?type=design&node-id=0%3A1&mode=design&t=jG91QWCULBc0UHSg-1">
                                <FigmaIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] md:w-[80%] m-auto each-slide-effect h-[50vh] md:h-[60vh]">
                    <div className='h-full flex flex-col bg-contain bg-no-repeat bg-center rounded-2xl' style={{ 'backgroundImage': `url(${AminDashboardUI})` }}>
                        <div className='group relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 shadow-lg w-auto m-auto flex justify-center items-center rounded-full p-4 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500'>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <a className='relative z-10 text-white m-auto text-[2rem] group-hover:scale-110 transition-transform duration-300' target='_blank' rel='noreferrer' href="https://www.figma.com/file/AnMU5ZR6xKSlkquUFKuzUl/Admin-DasBoard?type=design&node-id=0%3A1&mode=design&t=B3uV27QrufvsXysz-1">
                                <FigmaIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default DesignUI;