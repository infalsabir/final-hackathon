import React, { useEffect } from "react";
import { FaBookOpen, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-blue-600 text-white px-4 py-12">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center mb-12"
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl">
          Our mission is to provide an easy and organized way to manage, share, and learn through digital notes. We are dedicated to empowering students and professionals in their learning journey.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Mission */}
        <div
          className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
        >
          <FaBookOpen className="text-yellow-400 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            To make learning more accessible by providing digital tools that help students organize and share notes effectively.
          </p>
        </div>

        {/* Vision */}
        <div
          className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaChalkboardTeacher className="text-yellow-400 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            To be a global leader in educational technology, known for fostering a community of learners and educators who share knowledge seamlessly.
          </p>
        </div>

        {/* Values */}
        <div
          className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaUsers className="text-yellow-400 text-4xl mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <p>
            Collaboration, knowledge-sharing, and simplicity are at the core of our platform's mission to enhance learning experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2
          className="text-3xl font-semibold text-center mb-8"
          data-aos="fade-up"
        >
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
          >
            <img
              src="\1_chTCc1-k7FlJNxiWQzZ6dQ.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Infal</h3>
            <p className="text-gray-200">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="\1_chTCc1-k7FlJNxiWQzZ6dQ.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Infal</h3>
            <p className="text-gray-200">Chief Technology Officer</p>
          </div>

          {/* Team Member 3 */}
          <div
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src="\1_chTCc1-k7FlJNxiWQzZ6dQ.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Infal</h3>
            <p className="text-gray-200">Head of Marketing</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Organizing Your Notes?</h2>
        <p className="mb-6">
          Whether you're a student or a professional, we offer a seamless platform to manage and access your notes anywhere, anytime.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;

