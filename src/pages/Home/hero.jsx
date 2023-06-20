import ArrowDown from "../icons/doubleArrowDown";
import { HashLink as Link } from 'react-router-hash-link';
const Hero = () => {
    return ( 
    <div className="h-screen bg-[#0F0F0F]">
        <div className="text-white m-auto text-center w-[90%] h-full md:w-[80%] flex flex-col gap-[8%] justify-center items-center border-b transition-all duration-500 bg-[#0F0F0F]">
            <h1 className="text-[50px]">Mohamed<br></br> Ncib</h1>
            <p>Hello world , Im Mohamed Ncib computer Science Student , Web developer and art Lover</p>
            <button className="text-[40px]"><Link to="/Portfolio/#Skills" smooth><ArrowDown /></Link></button>
            <div className="space-y-6">
                <div className="flex flex-row gap-6">
                    <p>18</p>
                    <p>jun</p>
                    <p>2023</p>
                </div>
                <p>3:34 <span>AM</span></p>
            </div>
            
        </div>
        </div>
     );
}
 
export default Hero;