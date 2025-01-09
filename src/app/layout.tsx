import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter =  Inter({ subsets:['latin'], variable:"--font-sans"});
const calistoga = Calistoga({ 
  subsets:['latin'], 
  variable:"--font-serif", 
  weight: ['400']});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio, where I showcase my projects, coding skills, and passion for technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans overflow-x-hidden min-h-screen"
        )}
        >
          <div className="max-w-screen overflow-x-hidden">
          {children}
        </div>
        </body>
    </html>
  );
}
