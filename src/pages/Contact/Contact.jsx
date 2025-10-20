import { useState } from "react";
import Footer from "../footer/footer.jsx";
import PhoneIcon from "../icons/phoneIcon.jsx";
import GmailIcon from "../icons/gmailIcon.jsx";
import Navbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../functions/scrollToTp.js";
import Linkedin from "../icons/linkedin.jsx";

const Contact = () => {
    ScrollToTop();

  const [feedback, setFeedback] = useState("");
  const Navigate = useNavigate();

const createResponse = (e) => {
  e.preventDefault();

  const phoneNumber = "21655518492"; // Your WhatsApp number in international format (without +)
  const message = `hi ${feedback}.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank"); // Opens WhatsApp in new tab

  // Clear form
  setFeedback("");

  // Navigate to Thank You page
  Navigate("/Thank-you");
};
  return (
    <div className="bg-transparent text-white min-h-screen flex flex-col justify-around overflow-hidden">
      <Navbar />

      {/* Gradient Orbs */}
      <div className=" bg-purple-600/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="  bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <div className=" z-10 flex md:flex-row flex-col w-full justify-center items-center m-auto tracking-widest">
        {/* Form Section with glassmorphism */}
        <form
          onSubmit={createResponse}
          className="group relative flex flex-col m-auto space-y-8 md:w-[45%] w-full  p-8 md:p-10 rounded-2xl border border-purple-500/30 bg-[#0F0F0F]/50 backdrop-blur-xl shadow-2xl shadow-purple-500/20 hover:border-purple-500/60 transition-all duration-500"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
              Let's Connect
            </h3>
            <p className="text-gray-400">I'd love to hear from you</p>
          </div>

          <div className="relative z-10 space-y-6">

            <div className="relative">
              <textarea
                required
                cols="30"
                rows="6"
                placeholder="What's on your mind?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-transparent border-2 border-purple-500/30 focus:border-purple-500 focus:outline-none transition-all duration-300 p-4 rounded-xl text-lg placeholder:text-gray-500 resize-none"
              />
            </div>

            <button
              className="relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-4 rounded-xl font-bold text-lg overflow-hidden group/btn hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
              type="submit"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Send Message</span>
            </button>
          </div>
        </form>

        {/* Contact Info Card with glassmorphism */}
        <div className="flex flex-col justify-center items-start gap-6 space-y-4 p-8 md:p-10 m-auto rounded-2xl border border-purple-500/30 bg-[#0F0F0F]/50 backdrop-blur-xl shadow-2xl shadow-purple-500/20 hover:border-purple-500/60 transition-all duration-500">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

          <h2 className="relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <a
            className="relative z-10 flex flex-row justify-start items-center space-x-4 border-b border-purple-500/30 w-full pb-4 hover:bg-purple-500/10 px-3 py-2 rounded-lg transition-all duration-300 group/link"
            href="https://www.linkedin.com/in/mohamed-ncib/"
          >
            <div className="p-2 bg-purple-500/20 rounded-full group-hover/link:bg-purple-500/30 transition-all duration-300">
              <Linkedin className="text-[29px] text-purple-400" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <p className="font-semibold">Mohamed Ncib</p>
            </div>
          </a>

          <div className="relative z-10 flex flex-row justify-start items-center space-x-4 border-b border-purple-500/30 w-full pb-4 px-3 py-2">
            <div className="p-2 bg-purple-500/20 rounded-full">
              <PhoneIcon className="text-[31px] text-purple-400" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">Phone Number</p>
              <p className="font-semibold">+216 55 518 492</p>
            </div>
          </div>

          <a
            className="relative z-10 flex flex-row justify-start items-center space-x-4 border-b border-purple-500/30 w-full pb-4 hover:bg-purple-500/10 px-3 py-2 rounded-lg transition-all duration-300 group/link"
            href="mailto:mohamed.ncib@polytechnicien.tn"
          >
            <div className="p-2 bg-purple-500/20 rounded-full group-hover/link:bg-purple-500/30 transition-all duration-300">
              <GmailIcon className="text-[28px] text-purple-400" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold text-sm">mohamed.ncib@polytechnicien.tn</p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
