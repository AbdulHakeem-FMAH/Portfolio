import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage1 from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card"

const portfolioProjects = [
  {
    company: "TATA ELXSI",
    year: "2024",
    title: "Employee Management CRUD Application",
    results: [
      { title: "Backend : SpringBoot, MySQL" },
      { title: "Frontend : HTML, CSS, JavaSript" },
      { title: "Deployed a FullStack Web Application" },
    ],
    link: "https://abdulhakeem-fmah.github.io/EmployeeManagement/",
    image: darkSaasLandingPage,
  },
  {
    company: "Final Year Project",
    year: "2024",
    title: "Multipurpose IoT Tracker",
    results: [
      { title: "Realtime tracking of assets" },
      { title: "Added SOS functionality" },
      { title: "Achieved output precision of up to 98%" },
    ],
    link: "https://drive.google.com/file/d/1MqmAVAtOD1ApUfV8B6NRA0c24tMso2u_/view?usp=sharing",
    image: lightSaasLandingPage1,
  },
  {
    company: "Self Project",
    year: "2025",
    title: "Personal Portfolio",
    results: [
      { title: "Frontend : React, Next.js, Tailwind CSS" },
      { title: "Animations : Framer Motion" },
      { title: "Deployment : Vercel" },
    ],
    link: "#",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Real-world Results" title="Projects" description="See how I transformed concepts into engaging digital experiences"/>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card
           key={project.title}
           className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky" 
           style={{
            top: `calc(64px + ${projectIndex * 40}px)`,
           }} >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
            
            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(result => (
                <li className="flex gap-2 text-sm text-white/50 md:text-base" key={result.title}> 
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>Visit Live Site</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
            </div>
            <div className="relative">
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
            </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
