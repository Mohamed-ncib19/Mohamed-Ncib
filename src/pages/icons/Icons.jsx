import GithubIcon from "./githubIcon";
import GmailIcon from "./gmailIcon";
import Linkedin from "./linkedin";
const Icons = () => {
    return ( 
        <div className="flex flex-row justify-center items-center gap-4">
                    <div className="hover:bg-[#6947ef] rounded-full p-4 bg-[#272727] transition-all duration-500">
                        <a href="https://github.com/Mohamed-ncib19">
                            <GithubIcon className="md:text-[20px] text-[15px] transition-all duration-500" />
                        </a>
                    </div>
                    <div className="hover:bg-[#6947ef] rounded-full p-4 bg-[#272727] transition-all duration-500">
                        <a href="https://www.linkedin.com/in/mohamed-ncib-1b17b5224/">
                            <Linkedin className="md:text-[20px] text-[15px] transition-all duration-500" />
                        </a>
                    </div>
                    <div className="hover:bg-[#6947ef] rounded-full p-4 bg-[#272727] transition-all duration-500">
                        <a href="mailTo:ncibmohamed@essths.u-sousse.tn">
                            <GmailIcon className="md:text-[20px] text-[15px] transition-all duration-500" />
                        </a>
                    </div>
                </div>
     );
}
 
export default Icons;