import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFileAlt, FaMobileAlt, FaCloud, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaFileAlt />,
    title: "Note Management",
    description:
      "Efficiently organize and manage your notes with a user-friendly platform that helps you stay on top of your studies or work.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Access",
    description:
      "Access your notes anytime, anywhere, with our seamless mobile app for both iOS and Android devices.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Storage",
    description:
      "Store your notes safely in the cloud with secure and scalable storage options that ensure your notes are always accessible.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Customizable Themes",
    description:
      "Personalize your note-taking experience with a variety of customizable themes and layouts to suit your style.",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-blue-600 text-white px-4 py-12">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center mb-12"
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl max-w-2xl">
          Explore the range of services we provide to enhance your learning and note-taking experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="text-yellow-400 text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section
        className="mt-12 text-center"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">
          Join us today to organize, access, and share your notes with ease. Let’s enhance your learning experience.
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

export default ServicesPage;

