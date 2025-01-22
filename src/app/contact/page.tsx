import Navbar from '@/components/allnavbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6 lg:px-16 pb-[72px] bg-white w-full h-auto mb-0">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4 h-auto lg:pl-[195px]">
          <p className="text-sm uppercase tracking-wide font-semibold text-black">Contact Us</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-black leading-[60px]">
            Get in touch <br />today!
          </h1>
          <p className="text-gray-600 leading-[30px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="space-y-1">
            <p className="font-medium text-gray-800">
              Phone: <span className="text-gray-600">+451 215 215</span>
            </p>
            <p className="font-medium text-gray-800">
              Fax: <span className="text-gray-600">+451 215 215</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mt-4">
            <Link href="https://twitter.com" className="text-gray-600 hover:text-blue-500">
              <FaTwitter size={30} />
            </Link>
            <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-700">
              <FaFacebookF size={30} />
            </Link>
            <Link href="https://instagram.com" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={30} />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
              <FaLinkedinIn size={30} />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-pink-200 rounded-full w-64 h-64 lg:w-96 lg:h-96 -z-10"></div>
          <Image
            src="/family.png" // Save your image in the public folder with this name
            alt="Family Shopping"
            width={500}
            height={500}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-white mt-0 px-6 sm:px-[40px] md:px-[80px] lg:px-[195px] pb-10">
        {/* Heading */}
        <div className="text-center space-y-2 mb-8">
          <p className="uppercase text-sm tracking-wide text-gray-500">
            Visit Our Office
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-[50px]">
            We help small businesses <br /> with big ideas
          </h2>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Card 1: Phone */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 text-blue-500 flex items-center justify-center rounded-full w-12 h-12">
                <FiPhone />
              </div>
            </div>
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@people.com</p>
            <p className="font-medium text-gray-700">Get Support</p>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
              Submit Request
            </button>
          </div>

          {/* Contact Card 2: Location */}
          <div className="text-center space-y-4 bg-[#252B42] text-white p-4 rounded-lg">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full">
                <FiMapPin />
              </div>
            </div>
            <p>georgia.young@example.com</p>
            <p>georgia.young@people.com</p>
            <p className="font-medium">Get Support</p>
            <button className="px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-blue-500">
              Submit Request
            </button>
          </div>

          {/* Contact Card 3: Email */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 flex items-center justify-center rounded-full">
                <FiMail />
              </div>
            </div>
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@people.com</p>
            <p className="font-medium text-gray-700">Get Support</p>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
              Submit Request
            </button>
          </div>
        </div>

        {/* "Let's Talk" Section */}
        <div className="text-center mt-8 space-y-4 pb-8">
          <p className="text-gray-500">We cant wait to meet you</p>
          <h3 className="text-3xl font-bold text-gray-800">Lets Talk</h3>
          <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600">
            Try it now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
































