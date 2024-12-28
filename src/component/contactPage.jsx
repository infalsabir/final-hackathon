
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Get in <span className="text-yellow-400">Touch</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
              <FaPhone className="text-3xl text-yellow-400" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">Call Us</h2>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
              <FaEnvelope className="text-3xl text-yellow-400" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">Email Us</h2>
                <p className="text-gray-600">support@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
              <FaMapMarkerAlt className="text-3xl text-yellow-400" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">Visit Us</h2>
                <p className="text-gray-600">123 Main Street, Cityville</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-600">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-600 py-2 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-lg hover:bg-yellow-500 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
