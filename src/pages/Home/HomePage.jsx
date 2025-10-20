import Navbar from "../navbar/navbar";
import Hero from "./hero";
import Skills from "./skills";
import Experience from "./Experience";
import RecentProjectsHome from "./recentProjectsHome";
import DesignUI from "./designUI";
import ContactHome from "./ContactHome";
import Footer from "../footer/footer.jsx";
import ScrollToTop from "../../functions/scrollToTp";
const HomePage = () => {
  ScrollToTop();

  return (
      <div className="bg-transparent bg-fixed min-h-screen md:bg-cover m-auto">
        <Navbar />
        <Hero />
        <Skills/>
        <Experience />
        <RecentProjectsHome />
        <DesignUI />
        <ContactHome />
        <Footer />
      </div>
  );
}

export default HomePage;
