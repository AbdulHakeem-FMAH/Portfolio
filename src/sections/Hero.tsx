import memojiImage from "../assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "../assets/icons/sparkle.svg";
import DownLoadIcon from "../assets/icons/chrome.svg"

export const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-30 opacity-5" 
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: 'cover',  // Optional: To cover the entire background area
          backgroundPosition: 'center', // Optional: To center the background image
        }}
      ></div>
      
      {/* Circle around content */}
      <div className="w-[740px] h-[740px] hero-ring"></div>
      <div className="w-[940px] h-[940px] hero-ring"></div>
      <div className="w-[1140px] h-[1140px] hero-ring"></div>
      <div className="w-[1340px] h-[1340px] hero-ring"></div>

      {/* shouldOrbit = false,
          oribitDuration,
          shouldSpin = false,
          spinDuration,
      */}

      <HeroOrbit size={430} rotation={-38} shouldOrbit oribitDuration="30s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79} shouldOrbit oribitDuration="32s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={530} rotation={180} shouldOrbit oribitDuration="34s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20} shouldOrbit oribitDuration="36s" shouldSpin spinDuration="6s">
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={570} rotation={-10} shouldOrbit oribitDuration="38s" shouldSpin spinDuration="6s">
        <div className="size-2 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98} shouldOrbit oribitDuration="40s" shouldSpin spinDuration="6s">
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={650} rotation={-90} shouldOrbit oribitDuration="42s" shouldSpin spinDuration="6s">
        <div className="size-2 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={710} rotation={139} shouldOrbit oribitDuration="44s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={720} rotation={117} shouldOrbit oribitDuration="46s" shouldSpin spinDuration="6s">
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={800} rotation={-72} shouldOrbit oribitDuration="48s" shouldSpin spinDuration="6s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={825} rotation={-42} shouldOrbit oribitDuration="50s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size- text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={950} rotation={-20} shouldOrbit oribitDuration="52s" shouldSpin spinDuration="6s">
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>
      </div>
      
      <div className="container relative">
        <div className="flex flex-col items-center">
          <Image 
            src={memojiImage} 
            className="w-[100px]" 
            alt="Person peeking from behind laptop" 
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center font-bold mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Electronics and Communication Engineering graduate with hands-on experience in electronic systems, communication
            protocols, circuit design and in software development, specializing in Java, Spring Boot, and API integration. Proficient in
            developing scalable and secure applications using modern technologies. Seeking an entry-level role to leverage my
            technical expertise and contribute to innovative backend solutions
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects" className="z-10">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
          </a>
          <a href="/resume.pdf" download="Abdul Hakeem_Resume" className="z-10">
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl z-10 animate-pulse">
            {/* <span>👋</span> */}
            <span className="font-semibold">Download Resume</span>
            <DownLoadIcon className="w-4 h-4" />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};
