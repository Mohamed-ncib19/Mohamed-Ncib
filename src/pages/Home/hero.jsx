import ArrowDown from "../icons/doubleArrowDown";
import { HashLink as Link } from "react-router-hash-link";
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
  const D = new Date();
  return (
    <div className="h-screen bg-[#0F0F0F]">
      <div className="text-white m-auto text-center w-[90%] h-full md:w-[80%] flex flex-col gap-[8%] justify-center items-center border-b transition-all duration-500 bg-[#0F0F0F]">
        <h1 className="text-[50px]">
          Mohamed<br></br> Ncib
        </h1>
        <p>
          Hello world, Im Mohamed Ncib, a Computer Science Student, Web Designer , Web Developer and Art Lover.
        </p>
        <button className="text-[40px]">
          <Link to="/#Skills" smooth>
            <ArrowDown />
          </Link>
        </button>
        <div className="space-y-4">
          <div className="flex flex-row gap-6">
            <p>{D.getDate()}</p>
            <p>{month[D.getMonth()]}</p>
            <p>{D.getFullYear()}</p>
          </div>
          <p className="tracking-wider">
            <span id="Hours">
              {D.getHours() >= 12
                ? (D.getHours() - 12).toString()
                : D.getHours().toString()}
            </span>
            <span>:</span>
            <span id="Minutes">{D.getMinutes()}</span>
            <span>{D.getHours() >= 12 ? " PM" : " AM"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
