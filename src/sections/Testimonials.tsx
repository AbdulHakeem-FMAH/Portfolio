import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import tel from "@/assets/images/tellogo-removebg-preview.png";
import ver from "@/assets/images/verslogo-removebg-preview.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Versatron Solutions",
    position: "Implant Trainee",
    time: "March 2022 to April 2022",
    text: "Gained expertise in RADAR systems, focusing on detection and signal processing, while assisting in system analysis and troubleshooting",
    avatar: ver,
  },
  {
    name: "TATA ELXSI",
    position: "Developer Trainee",
    time: "January 2024 to June 2024",
    text: "Developed a CRUD application leveraging Spring Boot, SQL, and Core Java, while designing and integrating RESTful APIs to enhance data processing efficiency and support legacy systems. Gained proficiency in Microservices, OOP principles, and JavaScript",
    avatar: tel,
  },
  {
    name: "Versatron Solutions",
    position: "Implant Trainee",
    time: "March 2022 to April 2022",
    text: "Gained expertise in RADAR systems, focusing on detection and signal processing, while assisting in system analysis and troubleshooting",
    avatar: ver,
  },
  {
    name: "TATA ELXSI",
    position: "Developer Trainee",
    time: "January 2024 to June 2024",
    text: "Developed a CRUD application leveraging Spring Boot, SQL, and Core Java, while designing and integrating RESTful APIs to enhance data processing efficiency and support legacy systems. Gained proficiency in Microservices, OOP principles, and JavaScript",
    avatar: tel,
  },
];

export const TestimonialsSection = () => {
  return (
  <div id="experience" className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader 
      eyebrow="Job Narratives"
      title="Professional Journey" 
      description="Check out my experiences below to see how each role and project has shaped my skills, from backend development to IoT solutions. Take a look!"
    />
    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"> 
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_,index) =>   (
          <Fragment key={index}>
          {testimonials.map(testimonial => (
            <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p8 hover:-rotate-3 transition duration-300">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-1000 items-center justify-center inline-flex rounded-full flex-shrink-0">
                  <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white/90">{testimonial.time}</div>
                  <div className="text-sm text-white/40">{testimonial.position}</div>
                </div>
              </div>
              <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
             </Card>
        ))}
        </Fragment>
      ))}
      </div>
    </div>
  </div>
  </div>
  );
};
