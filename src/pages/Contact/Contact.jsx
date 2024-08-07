import { useState } from "react";
import Footer from "../footer/footer.jsx";
import PhoneIcon from "../icons/phoneIcon.jsx";
import GmailIcon from "../icons/gmailIcon.jsx";
import Navbar from "../navbar/navbar";
import { db } from "../../Firebase/firebase.js";
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../functions/scrollToTp.js";
import Linkedin from "../icons/linkedin.jsx";
const Contact = () => {
    ScrollToTop();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [feedback, setFeedback] = useState("");
  const uniqueId = uuidv4();
  const Navigate = useNavigate();

  const createResponse = (e) => {
    e.preventDefault();
    const response = { name, mail, feedback };
    console.log(response)
    set(ref(db, `/${uniqueId}`), {
      todo: response,
      uniqueId,
    });
    setName("");
    setMail("");
    setFeedback("");
    Navigate("/Thank-you");
  };
  return (
    <div className="bg-[#0F0F0F] text-white">
      <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto  lg:w-[22%] transition-all duration-500">
        <p></p>
      </div>
      <Navbar />
      <div className="flex md:flex-row flex-col justify-center items-center m-auto md:p-0 p-3 h-full tracking-widest">
        <form
          onSubmit={createResponse}
          className="flex flex-col m-auto space-y-7 md:w-[40%] w-full h-[70vh] p-8"
        >
          <input
            type="text"
            placeholder="whats your name?"
            required
            name=""
            id=""
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-transparent border-b border-[#6947ef]"
          />
          <input
            type="text"
            required
            placeholder="whats your mail?"
            name="mail"
            id="mail"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
            className="bg-transparent border-b border-[#6947ef]"
          />
          <textarea
            name="any"
            id="any"
            required
            cols="30"
            rows="10"
            placeholder="whats in your mind?"
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
            className="bg-transparent border-b border-[#6947ef]"
          />
          <button className="bg-[#6947ef] p-3 mt-20" type="submit">
            Lets go
          </button>
        </form>
        <div className="bg-[#6947ef] md:w-[30%] m-auto h-auto flex flex-col justify-center items-center gap-2 space-y-7 p-7 float-none">
          <h2 className="text-[30px] m-auto">i would Love to hear from you</h2>
          <a className="flex flex-row justify-start items-center space-x-4 border-b border-[#0F0F0F] w-full m-auto hover:bg-opacity-25 hover:bg-white px-2 py-1 rounded-md" href="https://www.linkedin.com/in/mohamed-ncib/">
            <Linkedin className="text-[29px]" />
            <div className="flex flex-col"  >
              <p>Linkedin</p>
              <p>Mohamed Ncib</p>
            </div>
          </a>
          <div className="flex flex-row justify-start items-center space-x-4 border-b border-[#0F0F0F] w-full m-auto">
            <PhoneIcon className="text-[31px]" />
            <div className="flex flex-col">
              <p>Phone Number</p>
              <p className="text-center" >+216 55 518 492</p>
            </div>
          </div>
          <a className="flex flex-row justify-start items-center space-x-4 border-b border-[#0F0F0F] w-full m-auto hover:bg-opacity-25 hover:bg-white px-2 py-1 rounded-md" href="mailto:ncibmohamed@essths.u-sousse.tn">
            <GmailIcon className="text-[28px]" />
            <div className="flex flex-col">
              <p>Mail</p>
              <p>ncibmohamed@essths.u-sousse.tn</p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
