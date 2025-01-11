"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useEffect, useState } from "react";

export const ContactSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    setIsMobile(window.innerWidth <= 768); // Mobile device width threshold
  }, []);

  const mailToLink = isMobile
    ? "mailto:abdul27hakeem28@gmail.com" // Mobile: Open default mail app
    : "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=abdul27hakeem28@gmail.com"; // Desktop: Open Gmail compose window

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold">Excited to collaborate?</h2>
              <p className="text-sm md:text-base mt-2">
                Let’s connect and explore exciting opportunities together! Whether you’re looking to hire a dedicated
                professional, have a project idea, or just want to chat, I’m here for it. Let’s collaborate and create
                something extraordinary!
              </p>
            </div>
            <div>
              <a href={mailToLink} target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
