import GithubIcon from "./githubIcon";
import GmailIcon from "./gmailIcon";
import Linkedin from "./linkedin";
const Icons = () => {
    return ( 
        <div className="flex flex-row justify-center items-center gap-4 m-0">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500">
                        <a href="https://github.com/Mohamed-ncib19">
                            <GithubIcon className="md:text-[20px] text-[15px] transition-all duration-500" />
                        </a>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500">
                        <a href="https://www.linkedin.com/in/mohamed-ncib-1b17b5224/">
                            <Linkedin className="md:text-[20px] text-[15px] transition-all duration-500" />
                        </a>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white w-[45%] p-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500">
                        <a href="mailTo:mohamed.ncib@polytechnicien.tn">
                            <GmailIcon className="md:text-[20px] text-[15px] transition-all duration-500" />
                        </a>
                    </div>
                </div>
     );
}
 
export default Icons;