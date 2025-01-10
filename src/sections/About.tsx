"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "../assets/icons/star.svg";
import bookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import { title } from "process";
import JavascriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CSSIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import GithubIcon from "../assets/icons/github.svg";
import EclipseIcon from "../assets/icons/Eclipse IDE.svg";
import JavaIcon from "../assets/icons/Java.svg";
import SpringIcon from "../assets/icons/Spring.svg";
import MySqlIcon from "../assets/icons/MySQL.svg";
import PythonIcon from "../assets/icons/Python.svg";
import CpIcon from "../assets/icons/C.svg";
import VsIcon from "../assets/icons/Visual Studio Code (VS Code).svg";
import InteljIcon from "../assets/icons/IntelliJ IDEA.svg";
import MavenIcon from "../assets/icons/Apache Maven.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/HakMap.png";
import SmileMemoji from "@/assets/images/Memoji3.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";

const toolboxItems = [
  {
    title: 'Core Java',
    iconType: JavaIcon,
  },
  {
    title: 'Spring Boot',
    iconType: SpringIcon,
  },
  {
    title: 'MySQL',
    iconType: MySqlIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'C Programming',
    iconType: CpIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'VS Code',
    iconType: VsIcon,
  },
  {
    title: 'Eclipse',
    iconType: EclipseIcon,
  },
  {
    title: 'IntelliJ IDEA',
    iconType: InteljIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
  {
    title: 'Maven',
    iconType: MavenIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
]

const hobbies = [
  {
    title: "Write-ups",
    emoji: "✍🏻",
    left: "7%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "💪🏻",
    left: "55%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "25%",
    top: "38%",
  },
  {
    title: "Travelling",
    emoji: "🛩️",
    left: "6%",
    top: "70%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "54%",
    top: "70%",
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
   <div id="about" className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader
     eyebrow="About Me"
     title="A Glimpse Into My World"
     description="Learn more about who I am, what I do, and what inspires me!"/>
     <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] md:col-span-2 lg:col-span-1">
        <CardHeader title="Blogspot!" description="A cozy corner of the web where I pen down my journey, thoughts, and ideas. Come, take a look!"/>
        <div className="w-40 mx-auto mt-2 md:mt-0">
        <a href="https://rawreverieswithinme.wordpress.com/">
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>Visit Blog</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
        </div>
      </Card>
      <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences" className=""/>
        <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]"/>
        <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:35s] hover:[animation-play-state:paused]"/>
      </Card>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the code!" className="px-6 py-6"/>
        <div className="relative flex-1" ref={constraintRef}>
          {hobbies.map(item => (
            <motion.div key={item.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
             style={{
              left: item.left,
              top: item.top,
            }}
            drag
            dragConstraints={constraintRef}
            >
              <span className="font-medium text-gray-950">{item.title}</span>
              <span>{item.emoji}</span>
            </motion.div>
          ))}
        </div>
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
  <a href="https://maps.app.goo.gl/9rkTrWbkMgC7x5tQ9" target="_blank" rel="noopener noreferrer">
    <Image src={mapImage} alt="map" className="h-full w-full object-cover"/>
    <div className="absolute top-[60%] left-[41%] -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
      <Image src={SmileMemoji} alt="smiling memoji" className="size-20"/>
    </div>
  </a>
</Card>
      </div>
     </div>
  </div>
  </div>
  );
};
