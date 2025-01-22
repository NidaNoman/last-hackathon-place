
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-8 mb-8">
          {/* Brand and Social Links */}
          <div className="text-center md:text-left">
            <h2 className="text-[24px] leading-[32px] font-bold text-[#252B42]">Bandage</h2>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#">
              <span className="text-blue-500 hover:text-blue-700 text-xl">
                <FaFacebook />
              </span>
            </Link>
            <Link href="#">
              <span className="text-blue-500 hover:text-blue-700 text-xl">
                <FaInstagram />
              </span>
            </Link>
            <Link href="#">
              <span className="text-blue-500 hover:text-blue-700 text-xl">
                <FaTwitter />
              </span>
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-gray-600">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4  text-[#252B42]  text-[16px] leading-[24px]">Company Info</h3>
            <ul className="space-y-2">
              <li><Link href="#"><span className="hover:text-gray-800">About Us</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Carrier</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">We are hiring</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Blog</span></Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold  mb-4   text-[#252B42]  text-[16px] leading-[24px]">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#"><span className="hover:text-gray-800">About Us</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Carrier</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">We are hiring</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Blog</span></Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold  text-[#252B42]  text-[16px] leading-[24px] mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link href="#"><span className="hover:text-gray-800">Business Marketing</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">User Analytic</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Live Chat</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Unlimited Support</span></Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold  text-[#252B42]  text-[16px] leading-[24px] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#"><span className="hover:text-gray-800">iOS & Android</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Watch a Demo</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">Customers</span></Link></li>
              <li><Link href="#"><span className="hover:text-gray-800">API</span></Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-bold  text-[#252B42]  text-[16px] leading-[24px] mb-4">Get In Touch</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor amet</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          Made With Love By Finland All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
