import Design from "../icons/design";
import ListeArrow from "../icons/doubleArrowListe";
import Coding from "../icons/FrontEndIcon.jsx";
import BackEndIcon from "../icons/BackEndIcon.jsx";
import DataBaseIcon from "../icons/DatabaseIcon.jsx";
import '../../css/style.css';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const Skills = () => {
  return (
    <div className="bg-transparent w-full" id="Skills">
      <div className="text-white w-[90%] md:w-[80%] m-auto p-7 bg-transparent pt-[8%] pb-24 transition-all duration-500 border-b border-purple-500/20 space-y-12">
        <div className="w-full md:w-[50%] m-auto text-center space-y-3">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Information Technologies
          </h1>
          <p className="text-gray-400 text-lg">Technical Skills & Expertise</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 pt-8 transition-all duration-500">

          {/* Design Section */}
          <Card className="group hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 border-purple-500/30">
            <CardHeader>
              <Design className='text-[60px] transition-all duration-500 text-purple-500 group-hover:scale-110 group-hover:rotate-6' />
              <CardTitle className="text-[28px] text-gray-300 group-hover:text-purple-400 transition-colors">
                Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">Figma</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">UI/UX Design</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">Prototyping</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Front-End Section */}
          <Card className="group hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 border-purple-500/30">
            <CardHeader>
              <Coding className='text-[60px] transition-all duration-500 text-purple-500 group-hover:scale-110 group-hover:rotate-6' />
              <CardTitle className="text-[28px] text-gray-300 group-hover:text-purple-400 transition-colors">
                Front End
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-center items-start space-y-3">
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">NextJS, React</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">Bootstrap, Tailwind</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">MaterialUI, Tabler</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">HTML, CSS, JS</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">PHP</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">WordPress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back-End Section */}
          <Card className="group hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 border-purple-500/30">
            <CardHeader>
              <BackEndIcon className='text-[60px] transition-all duration-500 text-purple-500 group-hover:scale-110 group-hover:rotate-6' />
              <CardTitle className="text-[28px] text-gray-300 group-hover:text-purple-400 transition-colors">
                Back End
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-center items-start space-y-4">
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">ExpressJS</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">Fastify</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">MongoDB</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">SQL</p>
                </div>
                <div className="flex flex-row items-center gap-2 hover:translate-x-2 transition-transform">
                  <ListeArrow />
                  <p className="text-gray-300">Firebase</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Skills;
