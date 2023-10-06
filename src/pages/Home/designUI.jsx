import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import telemex from "../../assets/telemex.png"
import portfolioUI from "../../assets/portfolioUI.png"
import AminDashboardUI from "../../assets/AminDashboardUI.png"
import FigmaIcon from "../icons/figmaIcon"

const DesignUI = () => {
       
    
    return ( 
        <div className=' m-auto bg-[#0F0F0F] p-6'>
            <h1 className='text-white text-center text-[3rem] p-4'>UI Design</h1>
            
             <Slide >
             
            <div className="w-[80%] m-auto each-slide-effect h-[50vh]">
                <div className='h-[50vh] flex flex-col bg-contain bg-no-repeat bg-center' style={{ 'backgroundImage': `url(${telemex})` }}>
                    <div className='bg-[#2a2a2b] shadow-lg w-auto m-auto flex justify-center items-center rounded-full p-4 hover:bg-[#6947ef] transition-all duration-300 '>
                        <a className='text-white m-auto text-[2rem]' target='_blank' rel='noreferrer' href="https://www.figma.com/file/gwtMKM1Id5w0YVxjLKVW9P/TELEMEX-RESPONSIVE-DESIGN?type=design&node-id=0%3A1&mode=design&t=rNXsLd8G3nWUgegi-1"><FigmaIcon /></a>
                   </div>
                </div>
               
                
                
            </div>
           
            <div className="w-[80%] m-auto each-slide-effect h-[50vh]">
            <div className='h-[50vh] flex flex-col bg-contain bg-no-repeat bg-center' style={{ 'backgroundImage': `url(${portfolioUI})` }}>
                    <div className='bg-[#2a2a2b] shadow-lg w-auto m-auto flex justify-center items-center rounded-full p-4 hover:bg-[#6947ef] transition-all duration-300 '>
                        <a className='text-white m-auto text-[2rem]' target='_blank' rel='noreferrer' href="https://www.figma.com/file/MiMsLCtAMc4okb9ckwExPT/Portfolio?type=design&node-id=0%3A1&mode=design&t=jG91QWCULBc0UHSg-1"><FigmaIcon /></a>
                   </div>
                </div>
            </div>

            <div className="w-[80%] m-auto each-slide-effect h-[50vh]">
            <div className='h-[50vh] flex flex-col bg-contain bg-no-repeat bg-center' style={{ 'backgroundImage': `url(${AminDashboardUI})` }}>
                    <div className='bg-[#2a2a2b] shadow-lg w-auto m-auto flex justify-center items-center rounded-full p-4 hover:bg-[#6947ef] transition-all duration-300 '>
                        <a className='text-white m-auto text-[2rem]' target='_blank' rel='noreferrer' href="https://www.figma.com/file/AnMU5ZR6xKSlkquUFKuzUl/Admin-DasBoard?type=design&node-id=0%3A1&mode=design&t=B3uV27QrufvsXysz-1"><FigmaIcon /></a>
                   </div>
                </div>
            </div>
                
                
        </Slide>
        </div>
     );
}
 
export default DesignUI;