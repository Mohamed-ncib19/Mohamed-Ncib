import { useState } from "react";
import Footer from "../footer/footer.jsx";
import InstagramIcon from "../icons/instagramIcon.jsx"
import PhoneIcon from "../icons/phoneIcon.jsx"
import GmailIcon from "../icons/gmailIcon.jsx";
import Navbar from "../navbar/navbar";
import {db} from '../../Firebase/firebase.js'
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [name , setName] = useState("");
    const [mail , setMail] = useState("");
    const [feedback , setFeedback] = useState("");
    const uniqueId = uuidv4();
    const Navigate = useNavigate();
    
    const createResponse =(e)=>{
        e.preventDefault();
        const response = {name , mail , feedback};
       set(ref(db,`/${uniqueId}`),{
        todo : response,
        uniqueId
       });
       setName("");
       setMail("");
       setFeedback("");
       Navigate("/Mohamed-Ncib/Thank-you")
        
    }
    return ( 
        <div className="bg-[#0F0F0F] text-white">
      <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto  lg:w-[22%] transition-all duration-500">
        <p></p>
      </div>
      <Navbar />
     <div className="flex md:flex-row justify-around items-center  m-auto flex-col space-x-12 h-screen mb-5 tracking-widest">
        
        <form onSubmit={createResponse} className="flex flex-col gap-2 md:w-[40%] w-[80%] h-[70vh] p-8 space-y-5">
            <input type="text" placeholder="whats your name?" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} className="bg-transparent border-b border-[#6947ef]"/>
            <input type="text" placeholder="whats your mail?" name="mail" id="mail" value={mail} onChange={(e)=>{setMail(e.target.value)}} className="bg-transparent border-b border-[#6947ef]" />
            <textarea name="any" id="any" cols="30" rows="10" placeholder="whats in your mind?" value={feedback} onChange={(e)=>{setFeedback(e.target.value)}}  className="bg-transparent border-b border-[#6947ef]"/>
            <button className="bg-[#6947ef] p-3 mt-20"
            type="submit"            
            >Lets go</button>
        </form>
        <div className="bg-[#6947ef] md:w-[30%] m-auto w-[70%] h-auto flex flex-col gap-2 space-y-7 p-8">
            <h2 className="text-[30px] m-auto">i would Love to hear from you</h2>
            <div className="flex flex-row justify-start items-center space-x-3 border-b border-[#0F0F0F] w-[90%] m-auto">
                <InstagramIcon className="text-[29px]" />
                <div className="flex flex-col">
                    <p>instagram</p>
                    <p>mohamed__ncib</p>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center space-x-3 border-b border-[#0F0F0F] w-[90%] m-auto">
                <PhoneIcon className="text-[31px]" />
                <div className="flex flex-col">
                    <p>Phone Number</p>
                    <p>+216 55 518 492</p>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center space-x-3 border-b border-[#0F0F0F] w-[90%] m-auto">
                <GmailIcon className="text-[28px]" />
                <div className="flex flex-col">
                    <p>Gmail</p>
                    <p>mohamedncib900@gmail.com</p>
                </div>
            </div>
        </div>
     </div>
     <Footer />
    </div>
     );
}
 
export default Contact;