import Icons from "../icons/Icons";


const Footer = () => {
    return ( 
        <footer className=" text-white ">
            <div className="container mx-auto py-8 pt-2 flex flex-row justify-between items-center border-t md:w-[90%] w-full">
            <p className="md:text-[90%] text-[80%]">
            Designed and Developed by Mohamed Ncib{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg px-2 text-center font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-500">
                &lt;/&gt;
            </span>
            </p>
                            <Icons />
            </div>
        </footer>
     );
}
 
export default Footer;