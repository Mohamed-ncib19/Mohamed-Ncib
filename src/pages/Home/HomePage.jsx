import Navbar from "../navbar/navbar";
import Hero from "./hero";
import Skills from "./skills";
import RecentProjectsHome from "./recentProjectsHome";
import ContactHome from "./ContactHome";
import Footer from "../footer/footer.jsx";
const HomePage = () => {
    return ( 
        <div className="bg-[#0F0F0F]  bg-fixed h-screen md:bg-cover m-auto" >
        <div className="bg-[#6947ef] w-[40%] h-[20vh] rounded-full blur-3xl m-auto mt-[-1rem] -z-10 lg:w-[22%] transition-all duration-500">
          <p></p>
        </div>
          <Navbar />
          <Hero />
          <Skills/>
          <RecentProjectsHome />
          <ContactHome />
          <Footer />
      </div>
     );
}
 
export default HomePage;