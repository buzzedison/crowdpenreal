
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
         <Link href="/"> <Image src="/crowdpenwhite.svg"
           width={200}
           height={50}
        //    alt="Crowdpen logo"
           />
           </Link> 
            
            </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        } lg:block pt-6 lg:pt-0 text-center lg:text-right`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 px-3 cursor-pointer">
            About
          </Link>
          <Link href="https://discord.gg/VEqUXcXm9k" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 px-3 cursor-pointer">
          Join Us
          </Link>
          {/* <Link href="/join-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white px-3 cursor-pointer">
          Careers
          </Link> */}
        </div>
        <div>
          <Link href="/donate" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 cursor-pointer">
           Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
