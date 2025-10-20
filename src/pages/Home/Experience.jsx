import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
       {
      id: 3,
      title: 'Product Designer',
      company: 'Abajim',
      location: 'On-Site',
      period: 'Dec 2024 - Jun 2025',
      type: 'Contract',
      description: 'Role centered on conceptualizing and implementing new system features while ensuring a seamless and intuitive user experience.I worked across multiple disciplines — from UX/UI design and feature engineering to risk analysis, graphic design, and marketing strategy — to deliver cohesive, high-quality digital solutions that align with user needs and business goals.',
      skills: ['Canva', 'Figma', 'User Research', 'Prototyping', 'UI/UX Design',],
      achievements: [
        'Redesigned the platform’s user flow',
        'Combined design thinking with marketing strategy and technical execution',
        'Features Innovation',
      ],
    },

    {
  id: 3,
  title: 'Freelance Creative Developer',
  company: 'Self-Employed',
  location: 'Remote',
  period: '2021 - Present',
  type: 'Freelance',
  description:
    'Working independently across various creative and technical domains, focusing on delivering impactful digital experiences. My freelance work spans web development, graphic design, and creative direction — combining aesthetic vision with functional engineering. I’m passionate about transforming ideas into innovative, user-centered digital products and brand visuals that inspire engagement and growth.',
  skills: [
    'React',
    'Next.js',
    'PHP',
    'Tailwind CSS',
    'WordPress',
    'Figma',
    'Adobe Illustrator',
    'Brand Strategy',
  ],
  achievements: [
    'Delivered multiple web projects for clients across diverse industries',
    'Created modern brand visuals and digital assets for small businesses',
    'Developed and refined innovative user flows that enhance digital experiences',
  ],
},
   
{
  id: 4,
  title: 'Engineering degree in Data Science and AI',
  company: 'Polytechnique',
  location: 'On-Campus',
  period: '2024 - Present',
  type: 'Education',
  description:
    'Completing a comprehensive engineering degree with a focus on Data Science and Artificial Intelligence.',
  skills: [
    'Python',
    'Machine Learning',
    'Data Analysis',
    'SQL',
    'C++',
    'Java',
    'AI Algorithms',
    'Problem Solving',
  ],
  achievements: [
  
  ],
},


  ];

  return (
    <div className="relative bg-transparent w-full py-20 border-b border-purple-500/20" id="Experience">
      {/* Gradient Orbs */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <div className="relative z-10 text-white w-[90%] md:w-[80%] m-auto transition-all duration-500 space-y-12">
        {/* Section Header */}
        <div className="w-full md:w-[50%] m-auto text-center space-y-2">
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-gray-400 text-lg">My Journey</p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 via-purple-500 to-transparent"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11px] md:left-[50%] md:transform md:-translate-x-1/2 w-[20px] h-[20px] rounded-full bg-purple-600 border-4 border-[#0F0F0F] z-10 shadow-lg shadow-purple-500/50"></div>

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <Card className="group hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-purple-400 transition-colors">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-300 font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
<Badge
  variant={exp.type === 'Education' ? 'success' : 'default'}
  className={`whitespace-nowrap ${
    exp.type === 'Freelance Project'
      ? 'bg-pink-800'
      : exp.type === 'Freelance'
      ? 'bg-lime-800'
      : exp.type === 'Education'
      ? 'bg-blue-800'
      : ''
  }`}
>

                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>

              {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 ? (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Key Achievements
                    </h4>

                    <ul className="space-y-1 text-sm text-gray-400">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}



                 

                    {/* Skills */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-purple-400">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <a
            href="https://www.linkedin.com/in/mohamed-ncib-1b17b5224/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View Full LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
