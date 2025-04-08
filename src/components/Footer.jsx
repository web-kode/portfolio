"use client";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 z-30 dark:bg-[#0a0f1e] border-t border-gray-200 dark:border-gray-700 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white tracking-widest logo">
            Webkode
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
            We build sleek websites and apps for startups and small businesses. Design, code, and strategy—handled end to end.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">Contact</a></li>
              <li><a href="/careers" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-4 tracking-wide">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/blog" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">Blog</a></li>
              <li><a href="/faq" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">FAQs</a></li>
              <li><a href="/privacy" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#6C63FF] text-gray-600 dark:text-gray-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-2 tracking-wide">
            Connect with us
          </h4>
          <div className="flex space-x-4 text-gray-600 dark:text-gray-400 text-xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#6C63FF] transition-all duration-200"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#6C63FF] transition-all duration-200"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#6C63FF] transition-all duration-200"><FaInstagram /></a>
            <a href="#" aria-label="GitHub" className="hover:text-[#6C63FF] transition-all duration-200"><FaGithub /></a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-6">
            © {new Date().getFullYear()} Webkode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
