import React, { useState, useEffect } from "react";
import ArrowDown from "../icons/doubleArrowDown";
import { HashLink as Link } from "react-router-hash-link";
import CoreModal from "../../components/modals/CoreModal";

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
    <div className="h-screen bg-[#0F0F0F]">
      <div className="text-white m-auto text-center w-[90%] h-full md:w-[80%] flex flex-col gap-[8%] justify-center items-center border-b transition-all duration-500 bg-[#0F0F0F]">
        <div className="flex justify-center items-center">
          <CoreModal buttonContent="NEWS" />
        </div>

        <h1 className="text-[50px] flex flex-col">
          <span>Mohamed</span>
          <span>Ncib</span>
        </h1>
        <p>
          Hello world, I`m Mohamed Ncib, a <span className=" font-bold" >Graduated</span> Computer Science Student, Web Designer, Web Developer and Art Lover.
        </p>
        <button className="text-[40px]">
          <Link to="/#Skills" smooth>
            <ArrowDown />
          </Link>
        </button>
        <div className="space-y-4">
          <div className="flex flex-row gap-6 font-bold">
            <p>{currentTime.getDate()}</p>
            <p>{month[currentTime.getMonth()]}</p>
            <p>{currentTime.getFullYear()}</p>
          </div>
          <p className="tracking-wider font-bold">
            <span id="Hours">{formattedHours}</span>
            <span> : </span>
            <span id="Minutes">{formattedMinutes}</span>
            <span>{` ${period}`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
