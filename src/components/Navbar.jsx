"use client";
import { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

import { AiFillHome } from "react-icons/ai";
import { BsFolder2Open } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userTheme === "dark" || (userTheme === null && systemTheme)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-[5%] backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 text-black dark:text-white transition-all">
      {/* Logo */}
      <div className="text-2xl tracking-widest logo font-bold">
        Webkode
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex space-x-6 items-center text-base font-medium justify-center">
        {[{ title: "Home", link: "/" },
        { title: "Projects", link: "/projects" },
        { title: "About Us", link: "/about" },
        { title: "Contact Us", link: "/contact" },
        ].map((nav) => {
          return <Link key={nav.title} href={nav.link} className="relative group px-2 py-1 text-sm transition-all duration-300 hover:text-base">
            {nav.title}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        })}
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 border rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden w-9 h-9 flex justify-center items-center"
        >
          {darkMode ? <IoIosSunny className="text-xl" /> : <IoMoon className="text-lg" />}
        </button>

        {/* Get Started - Only Desktop */}
        <button className="hidden md:inline-block px-4 py-2 text-white rounded-lg hover:bg-[#7f56d9]/50 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>

        {/* Hamburger Menu - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex justify-center items-center"
        >
          {menuOpen ? <HiOutlineX className="text-3xl" /> : <HiMenuAlt3 className="text-3xl" />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full px-6 py-6 bg-white dark:bg-gray-900 flex flex-col gap-4 text-sm font-medium shadow-md md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <AiFillHome className="text-lg" />
            Home
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <BsFolder2Open className="text-lg" />
            Projects
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <IoMdInformationCircleOutline className="text-lg" />
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <MdContactMail className="text-lg" />
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
