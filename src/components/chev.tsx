"use client"
import { 
    FacebookIcon, Search, ShoppingCart, Heart, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Menu, X
  } from 'lucide-react';
  import Link from 'next/link';
  import { useState } from 'react';
  
  export default function Shopa() {
    // State for controlling the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Function to toggle the menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div>
        {/* Top Bar */}
        <div className="bg-[#23856D] text-white flex flex-wrap justify-between items-center px-4 py-2 sm:flex-nowrap">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm">(225) 555-0118</span>
          </div>
  
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm">michelle.rivera@example.com</span>
          </div>
  
          <span className="hidden sm:block text-sm font-bold">
            Follow us and get a chance to win 80% off!
          </span>
  
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold">Follow Us:</span>
            <Instagram className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
          </div>
        </div>
  
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">Bandage</Link>
  
            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/pages" className="hover:underline">Pages</Link></li>
            </ul>
  
            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleMenu} className="hover:underline">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
  
            {/* Utility Links */}
            <div className="flex space-x-4 items-center">
              <Link href="#" className="hover:underline text-sm">Login / Register</Link>
              <Search className="w-5 h-5" />
              <ShoppingCart className="w-5 h-5" />
              <Heart className="w-5 h-5" />
            </div>
          </div>
  
          {/* Mobile Menu (Hidden by default, shows when isMenuOpen is true) */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-md">
              <ul className="flex flex-col space-y-4 py-3 px-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/shop" className="hover:underline">Shop</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/pages" className="hover:underline">Pages</Link></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    );
  }
  