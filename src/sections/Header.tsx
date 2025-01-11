"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    setIsMobile(window.innerWidth <= 768); // Mobile device width threshold
  }, []);

  const mailToLink = isMobile
    ? "mailto:abdul27hakeem28@gmail.com" // Mobile: Open default mail app
    : "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=abdul27hakeem28@gmail.com"; // Desktop: Open Gmail compose window

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#experience" className="nav-item">Experience</a>
        <a href="#about" className="nav-item">About</a>
        <a
          href={mailToLink}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
