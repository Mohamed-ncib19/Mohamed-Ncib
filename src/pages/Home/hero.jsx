import { useState, useEffect } from "react";
import ArrowDown from "../icons/doubleArrowDown";
import { HashLink as Link } from "react-router-hash-link";
import { Badge } from "../../components/ui/badge";
import BlurText from "@/components/BlurText";
const Hero = () => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours >= 12 ? (hours - 12).toString() : hours.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const period = hours >= 12 ? "PM" : "AM";
    return { formattedHours, formattedMinutes, period };
  };

  const { formattedHours, formattedMinutes, period } = formatTime(currentTime);

  return (
    <div className="min-h-screen relative">
      {/* Gradient Orbs */}
      <div className="absolute  bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute  bg-pink-600/20 rounded-full blur-3xl animate-pulse "></div>

      <div className="text-white m-auto text-center w-[90%] h-full md:w-[80%] flex flex-col gap-11 justify-center items-center border-b border-purple-500/20 transition-all duration-500 bg-transparent min-h-screen relative z-10">
        <div className="space-y-6 animate-fadeIn">

          <h1 className="text-[60px] md:text-[80px] lg:text-[100px] flex flex-col font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Mohamed
            </span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Ncib
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="default" className="text-sm py-1 px-3">
              Web Developer
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              UI/UX Designer
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              Art Lover
            </Badge>
          </div>
        </div>

        <p className="text-lg text-gray-300 max-w-2xl animate-fadeIn tracking-wider leading-loose">
          Hello World, I&apos;m Mohamed Ncib,
          I&apos;m passionate about blending <span className="font-bold text-purple-400">creativity</span> and turn ideas into meaningful designs and innovative flows that inspire and connect
        </p>

        <button className="text-[40px] text-purple-400 hover:text-purple-300 transition-all duration-300 animate-bounce hover:scale-110">
          <Link to="/#Skills" smooth>
            <ArrowDown />
          </Link>
        </button>

        <div className="space-y-4 animate-fadeIn">
          <div className="flex flex-row gap-6 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
            <p className="hover:text-purple-400 transition-colors">{currentTime.getDate()}</p>
            <p className="hover:text-purple-400 transition-colors">{month[currentTime.getMonth()]}</p>
            <p className="hover:text-purple-400 transition-colors">{currentTime.getFullYear()}</p>
          </div>
          <div className="tracking-wider font-bold text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
            <span className="text-purple-400" id="Hours">{formattedHours}</span>
            <span className="text-gray-500"> : </span>
            <span className="text-purple-400" id="Minutes">{formattedMinutes}</span>
            <span className="text-gray-400">{` ${period}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
