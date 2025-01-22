// components/SupportCards.js
import React from "react";

const SupportCards = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        We help small businesses with big ideas
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-envelope"></i> {/* Use Font Awesome icons */}
          </div>
          <h3 className="text-lg font-bold mb-2">Get Support</h3>
          <p className="text-gray-600 mb-4">georgia.young@example.com</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Request
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Get Support</h3>
          <p className="mb-4">georgia.young@example.com</p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
            Submit Request
          </button>
          </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-blue-500 text-4xl mb-4">
            <i className="fas fa-phone"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Get Support</h3>
          <p className="text-gray-600 mb-4">georgia.young@example.com</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportCards;
