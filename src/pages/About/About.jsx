import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import ScrollToTop from "../../functions/scrollToTp";
import Icons from "../icons/Icons";
import FrontEndIcon from "../icons/FrontEndIcon";
import MohamedPicture from "../../assets/ME.png"
import CVEnglish from "../../assets/PDF/Mohamed_Ncib_Resume_English.pdf"
import DownloadIcon from "../icons/download";

const About = () => {
  ScrollToTop();
  
  return (
    <div className="bg-transparent h-full text-white min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Dynamic gradient background with more movement */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl opacity-70 animate-pulse delay-700 pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tl from-pink-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute top-[15%] right-[15%] w-[350px] h-[350px] bg-purple-500/15 rounded-full blur-2xl animate-pulse delay-500 pointer-events-none"></div>

      <div id="content" className="relative z-10 h-full flex flex-col gap-20 p-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex lg:flex-row justify-between items-center flex-col gap-20 pt-16 lg:pt-24">
          {/* Left content */}
          <div className="lg:w-[55%] w-full gap-10 flex flex-col justify-center lg:items-start items-center lg:text-left text-center">
            {/* Greeting with icon */}
            <div className="flex items-center gap-3 text-purple-300 font-medium text-lg tracking-wide">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-400 hidden lg:block"></div>
              <span className="text-xl">👋 Hello, I'm</span>
            </div>

            {/* Name with massive presence */}
            <h1 className="text-[60px] md:text-[80px] lg:text-[90px] font-black tracking-tighter leading-[0.9] bg-gradient-to-r from-purple-300 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-2xl">
              Mohamed Ncib
            </h1>

            {/* Catchy tagline */}
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-tight text-gray-100">
              Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 italic">Ideas</span> into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 relative inline-block">
                Impact
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
              </span>
            </h2>

            {/* Engaging description */}
            <p className="text-[20px] md:text-[22px] leading-relaxed text-gray-300 max-w-2xl font-light">
              I craft <span className="font-semibold text-pink-300">digital experiences</span> that don't just look good—they <span className="font-semibold text-purple-300">solve problems</span> and create <span className="font-semibold text-blue-300">lasting value</span>. From concept to launch, I'm here to bring your vision to life.
            </p>

            {/* Value propositions */}
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              {[
                { icon: '✨', text: 'Creative problem solver with an eye for detail' },
                { icon: '🎯', text: 'Focused on user-centered design' },
                { icon: '🚀', text: 'Passionate about building what matters' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 group cursor-default"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[17px] text-gray-200 font-medium group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto mt-6">
              {/* Download CV Button - Primary */}
              <a
                href={CVEnglish}
                className="group relative flex flex-row justify-center items-center text-center gap-3 px-10 py-5 rounded-2xl font-bold text-[18px] bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60 active:scale-105"
                download="Mohamed_Ncib_Resume_English"
                target="_blank"
                rel="noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-12"></div>
                
                <span className="relative z-10">Download Resume</span>
                <DownloadIcon className="relative z-10 text-[1.7rem] group-hover:animate-bounce" />
              </a>

              {/* View Projects Button - Secondary */}
              <Link
                to="/Works"
                className="group relative flex flex-row justify-center items-center text-center gap-3 px-10 py-5 rounded-2xl font-semibold text-[18px] overflow-hidden transition-all duration-500 hover:scale-110 border-2 border-purple-400/60 hover:border-pink-400 backdrop-blur-sm active:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-all duration-500"></div>
                
                <span className="relative z-10 text-white">Explore Work</span>
                <FrontEndIcon className="relative z-10 text-[30px] text-purple-300 group-hover:text-pink-300 transition-all group-hover:rotate-12 group-hover:scale-110" />
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-4">
              <Icons />
            </div>
          </div>

          {/* Right image - Simple gray border frame */}
          <div className="lg:w-[40%] w-[50%] hidden md:flex relative group">
            {/* Simple gray border frame */}
            <div className="border-b-2 border-gray-900 rounded-2xl overflow-hidden shadow-2xl group-hover:border-gray-700  transition-all duration-500 group-hover:scale-105 group-hover:shadow-purple-500/20">
              <LazyLoadImage
                src={MohamedPicture}
                effect="blur"
                alt="Mohamed Ncib - Web Developer"
                className="w-max m-auto h-full object-cover "
              />
            </div>
          </div>
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {[
            { label: 'Ideas Realized', value: '15+', icon: '💡' },
            { label: 'Solutions Delivered', value: '10+', icon: '🎯' },
            { label: 'Satisfied Partners', value: '8+', icon: '🤝' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 border border-purple-500/30 rounded-3xl backdrop-blur-md hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 cursor-default overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-[16px] font-semibold group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 relative z-10">
        <Footer />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default About;