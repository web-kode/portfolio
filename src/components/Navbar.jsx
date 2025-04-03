"use client"
import { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Check the system's theme preference and set the default theme
  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set the theme based on localStorage or system preference
    if (userTheme === "dark" || (userTheme === null && systemTheme)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save in localStorage
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save in localStorage
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-[5%] backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 text-black dark:text-white transition-all">
      {/* Logo on the left */}
      <div className="text-2xl tracking-widest logo">
        <span>Webkode</span>
      </div>

      {/* Buttons and theme toggle */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 border rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden w-9 h-9 flex justify-center items-center"
        >
          {darkMode ? <IoIosSunny className="text-xl"/> : <IoMoon/>}
        </button>

        {/* Get Started button */}
        {/* <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-[#7f56d9]/50"> */}
        <button className="px-4 py-2 text-white rounded-lg hover:bg-[#7f56d9]/50 relative inline-block cursor-pointer text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
