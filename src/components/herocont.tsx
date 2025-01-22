import React from "react";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-white py-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between"
    >
      {/* Left Text Content */}
      <div className="max-w-lg mb-8 ">
        <h4>contact us</h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-">Get in touch <br/>today!</h2>
        <p className="text-gray-600 mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mb-4">
          <p className="text-gray-800">
            <strong>Phone:</strong> +451 215 215
          </p>
          <p className="text-gray-800">
            <strong>Fax:</strong> +451 215 215
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <i className="fab fa-twitter"></i> {/* Use Font Awesome or any icon library */}
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <i className="fab fa-instagram"></i>
            </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <Image
          src="/contact-image.jpg"
          alt="Contact Us"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
        <div className="absolute top-0 left-0 w-20 h-20 bg-pink-200 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-200 rounded-full"></div>
      </div>
    </section>
  );
};

export default ContactSection;
