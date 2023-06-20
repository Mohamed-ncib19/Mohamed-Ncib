import Icons from "../Home/Icons";


const Footer = () => {
    return ( 
        <footer className="bg-[#0F0F0F] text-white ">
            <div className="container mx-auto py-8 pt-2 flex flex-row justify-between items-center border-t md:w-[90%] w-full">
                <p className="md:text-[90%] text-[60%]">designed and developed by Mohamed Ncib <span className="text-[#6947ef]">	&lt;/&gt;</span></p>
                <Icons />
            </div>
        </footer>
     );
}
 
export default Footer;