import GithubIcon from "../icons/githubIcon";
import GmailIcon from "../icons/gmailIcon";
import Linkedin from "../icons/linkedin";
const Icons = () => {
    return ( 
        <div className="flex flex-row justify-center items-center gap-4">
                    <div className="hover:bg-[#6947ef] rounded-full p-2">
                        <a href="https://github.com/Mohamed-ncib19" target="_blank">
                            <GithubIcon />
                        </a>
                    </div>
                    <div className="hover:bg-[#6947ef] rounded-full p-2">
                        <a href="https://www.linkedin.com/in/mohamed-ncib-1b17b5224/" target="_blank">
                            <Linkedin />
                        </a>
                    </div>
                    <div className="hover:bg-[#6947ef] rounded-full p-2">
                        <a href="mailTo:mohamedncib900@gmail.com">
                            <GmailIcon />
                        </a>
                    </div>
                </div>
     );
}
 
export default Icons;