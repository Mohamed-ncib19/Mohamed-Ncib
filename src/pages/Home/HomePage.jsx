import Navbar from "../navbar/navbar";
import Hero from "./hero";
import Skills from "./skills";
import RecentProjectsHome from "./recentProjectsHome";
import DesignUI from "./designUI";
import ContactHome from "./ContactHome";
import Footer from "../footer/footer.jsx";
import ScrollToTop from "../../functions/scrollToTp";
const HomePage = () => {
  ScrollToTop();
  
    return ( 
        <div className="bg-[#0F0F0F]  bg-fixed h-screen md:bg-cover m-auto" >
        <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto mt-[-1rem] -z-50 lg:w-[22%] transition-all duration-500">
        
        </div>
          <Navbar />
          <Hero />
          <Skills/>
          <RecentProjectsHome />
          <DesignUI />
          <ContactHome />
          <Footer />
      </div>
     );
}
 
export default HomePage;