"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full h-[91px] px-[136px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* Navbar Inner Wrapper */}
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-black leading-[32px]">
            <Link href="/">Bandage</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="hidden lg:flex space-x-8 text-gray-800">
            <Link
              href="/"
              className="hover:text-blue-600 transition duration-300 w-[59px] leading-[24px]"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:text-blue-600 transition duration-300 w-[59px] leading-[24px]"
            >
              Product
            </Link>
            <Link
              href="/product"
              className="hover:text-blue-600 transition duration-300 w-[59px] leading-[24px]"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition duration-300 w-[59px] leading-[24px]"
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Login Button */}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-600 transition duration-300 flex items-center justify-center"
            >
              Login
            </Link>

            {/* Become a Member Button */}
            <Link
              href="/signup"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-white shadow-md mt-[91px]`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/product"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Actions for Mobile */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
